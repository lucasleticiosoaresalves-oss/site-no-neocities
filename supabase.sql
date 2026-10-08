-- banco do quarto do lucas
-- rodar no SQL Editor do supabase (pode rodar de novo)


-- quem e o dono do site
create or replace function public.eh_dono()
returns boolean
language sql
stable
set search_path = ''
as $$
    select lower(coalesce(auth.jwt() ->> 'email', '')) = lower('lucasleticiosoaresalves@gmail.com');
$$;


-- recados e depoimentos

create table if not exists public.recados (
    id bigint generated always as identity primary key,
    autor text not null check (char_length(btrim(autor)) between 1 and 30),
    texto text not null check (char_length(btrim(texto)) between 1 and 500),
    criado_em timestamptz not null default now()
);

create table if not exists public.depoimentos (
    id bigint generated always as identity primary key,
    autor text not null check (char_length(btrim(autor)) between 1 and 30),
    texto text not null check (char_length(btrim(texto)) between 1 and 1000),
    criado_em timestamptz not null default now()
);

-- anti-spam: no maximo 20 mensagens em 10 min
create or replace function public.antispam()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
    recentes int;
begin
    new.criado_em := now();
    execute format('select count(*) from public.%I where criado_em > now() - interval ''10 minutes''', tg_table_name)
        into recentes;
    if recentes >= 20 then
        raise exception 'muitas mensagens seguidas, tente mais tarde';
    end if;
    return new;
end;
$$;

drop trigger if exists antispam on public.recados;
create trigger antispam before insert on public.recados
    for each row execute function public.antispam();

drop trigger if exists antispam on public.depoimentos;
create trigger antispam before insert on public.depoimentos
    for each row execute function public.antispam();

alter table public.recados enable row level security;
alter table public.depoimentos enable row level security;

drop policy if exists "todos leem" on public.recados;
drop policy if exists "todos escrevem" on public.recados;
drop policy if exists "dono apaga" on public.recados;
create policy "todos leem" on public.recados for select using (true);
create policy "todos escrevem" on public.recados for insert with check (true);
create policy "dono apaga" on public.recados for delete using (public.eh_dono());

drop policy if exists "todos leem" on public.depoimentos;
drop policy if exists "dono le" on public.depoimentos;
drop policy if exists "todos escrevem" on public.depoimentos;
drop policy if exists "dono apaga" on public.depoimentos;
-- depoimento so eu leio
create policy "dono le" on public.depoimentos for select using (public.eh_dono());
create policy "todos escrevem" on public.depoimentos for insert with check (true);
create policy "dono apaga" on public.depoimentos for delete using (public.eh_dono());

grant select, insert, delete on public.recados, public.depoimentos to anon, authenticated;


-- diario (so eu)

create table if not exists public.diario (
    id bigint generated always as identity primary key,
    titulo text not null check (char_length(btrim(titulo)) between 1 and 60),
    texto text not null check (char_length(btrim(texto)) between 1 and 3000),
    criado_em timestamptz not null default now()
);

alter table public.diario enable row level security;

drop policy if exists "so o dono" on public.diario;
create policy "so o dono" on public.diario for all
    using (public.eh_dono()) with check (public.eh_dono());

revoke all on public.diario from anon;
grant select, insert, delete on public.diario to authenticated;


-- enquete

create table if not exists public.votos (
    votante uuid primary key,
    opcao smallint not null check (opcao between 0 and 9),
    criado_em timestamptz not null default now()
);

-- so pelas funcoes
alter table public.votos enable row level security;
revoke all on public.votos from anon, authenticated;

create or replace function public.votar(p_votante uuid, p_opcao int)
returns void
language sql
security definer
set search_path = ''
as $$
    insert into public.votos (votante, opcao) values (p_votante, p_opcao)
    on conflict (votante) do update set opcao = excluded.opcao, criado_em = now();
$$;

create or replace function public.resultado_enquete()
returns table (opcao smallint, total bigint)
language sql
stable
security definer
set search_path = ''
as $$
    select v.opcao, count(*) from public.votos v group by v.opcao;
$$;


-- contador de visitas

create table if not exists public.visitas (
    id int primary key default 1 check (id = 1),
    total bigint not null default 0
);
insert into public.visitas (id, total) values (1, 0) on conflict (id) do nothing;

alter table public.visitas enable row level security;
revoke all on public.visitas from anon, authenticated;

create or replace function public.contar_visita(p_nova boolean)
returns bigint
language plpgsql
security definer
set search_path = ''
as $$
declare
    resultado bigint;
begin
    if p_nova then
        update public.visitas set total = total + 1 where id = 1 returning total into resultado;
    else
        select total into resultado from public.visitas where id = 1;
    end if;
    return resultado;
end;
$$;

grant execute on function public.votar(uuid, int), public.resultado_enquete(), public.contar_visita(boolean)
    to anon, authenticated;


-- registros diarios

create table if not exists public.registros (
    id bigint generated always as identity primary key,
    texto text not null check (char_length(btrim(texto)) between 1 and 500),
    criado_em timestamptz not null default now()
);

alter table public.registros enable row level security;

drop policy if exists "todos leem" on public.registros;
drop policy if exists "dono escreve" on public.registros;
drop policy if exists "dono apaga" on public.registros;
create policy "todos leem" on public.registros for select using (true);
create policy "dono escreve" on public.registros for insert with check (public.eh_dono());
create policy "dono apaga" on public.registros for delete using (public.eh_dono());

grant select on public.registros to anon, authenticated;
grant insert, delete on public.registros to authenticated;


-- fotos do admin

create table if not exists public.fotos (
    id bigint generated always as identity primary key,
    album text not null check (char_length(btrim(album)) between 1 and 40),
    legenda text not null default '' check (char_length(legenda) <= 200),
    caminho text not null,
    criado_em timestamptz not null default now()
);

alter table public.fotos enable row level security;

drop policy if exists "todos veem" on public.fotos;
drop policy if exists "dono posta" on public.fotos;
drop policy if exists "dono apaga" on public.fotos;
create policy "todos veem" on public.fotos for select using (true);
create policy "dono posta" on public.fotos for insert with check (public.eh_dono());
create policy "dono apaga" on public.fotos for delete using (public.eh_dono());

grant select on public.fotos to anon, authenticated;
grant insert, delete on public.fotos to authenticated;

-- pasta das fotos (ate 5 MB)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('fotos', 'fotos', true, 5242880, array['image/jpeg', 'image/png', 'image/gif', 'image/webp'])
on conflict (id) do update set public = true, file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "dono envia fotos" on storage.objects;
drop policy if exists "dono apaga fotos" on storage.objects;
create policy "dono envia fotos" on storage.objects for insert to authenticated
    with check (bucket_id = 'fotos' and public.eh_dono());
create policy "dono apaga fotos" on storage.objects for delete to authenticated
    using (bucket_id = 'fotos' and public.eh_dono());


-- desenhos do paint (so aparecem se eu aprovar)

create table if not exists public.desenhos (
    id bigint generated always as identity primary key,
    autor text not null check (char_length(btrim(autor)) between 1 and 30),
    titulo text not null check (char_length(btrim(titulo)) between 1 and 60),
    imagem text not null check (imagem like 'data:image/png;base64,%' and char_length(imagem) <= 600000),
    criado_em timestamptz not null default now()
);
alter table public.desenhos add column if not exists publico boolean not null default false;

drop trigger if exists antispam on public.desenhos;
create trigger antispam before insert on public.desenhos
    for each row execute function public.antispam();

alter table public.desenhos enable row level security;

drop policy if exists "todos enviam" on public.desenhos;
drop policy if exists "dono ve" on public.desenhos;
drop policy if exists "aprovados ou dono" on public.desenhos;
drop policy if exists "dono aprova" on public.desenhos;
drop policy if exists "dono apaga" on public.desenhos;
create policy "todos enviam" on public.desenhos for insert with check (publico = false);
create policy "aprovados ou dono" on public.desenhos for select using (publico or public.eh_dono());
create policy "dono aprova" on public.desenhos for update using (public.eh_dono()) with check (public.eh_dono());
create policy "dono apaga" on public.desenhos for delete using (public.eh_dono());

grant select, insert on public.desenhos to anon, authenticated;
grant delete on public.desenhos to authenticated;
grant update (publico) on public.desenhos to authenticated;


-- spotify (so a funcao spotify mexe aqui)

create table if not exists public.spotify (
    id int primary key default 1 check (id = 1),
    refresh_token text,
    estado text,
    musicas jsonb not null default '[]',
    atualizado timestamptz
);
alter table public.spotify add column if not exists playlist jsonb;

alter table public.spotify enable row level security;
revoke all on public.spotify from anon, authenticated;


-- configuracoes que mudo pelo admin (perfil, enquete, comunidades)
create table if not exists public.config (
    chave text primary key check (chave in ('perfil', 'enquete', 'comunidades')),
    valor jsonb not null,
    atualizado timestamptz not null default now()
);

alter table public.config enable row level security;

drop policy if exists "todos leem" on public.config;
drop policy if exists "dono escreve" on public.config;
drop policy if exists "dono muda" on public.config;
drop policy if exists "dono apaga" on public.config;
create policy "todos leem" on public.config for select using (true);
create policy "dono escreve" on public.config for insert with check (public.eh_dono());
create policy "dono muda" on public.config for update using (public.eh_dono()) with check (public.eh_dono());
create policy "dono apaga" on public.config for delete using (public.eh_dono());

grant select on public.config to anon, authenticated;
grant insert, update, delete on public.config to authenticated;

-- zera a enquete quando troco as perguntas
create or replace function public.zerar_enquete()
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
    if not public.eh_dono() then
        raise exception 'so o dono';
    end if;
    delete from public.votos where true;
end;
$$;

revoke execute on function public.zerar_enquete() from anon;
grant execute on function public.zerar_enquete() to authenticated;


-- novidades do quarto
create table if not exists public.noticias (
    id bigint generated always as identity primary key,
    texto text not null check (char_length(btrim(texto)) between 1 and 300),
    criado_em timestamptz not null default now()
);

-- projetos
create table if not exists public.projetos (
    id bigint generated always as identity primary key,
    nome text not null check (char_length(btrim(nome)) between 1 and 80),
    descricao text not null default '' check (char_length(descricao) <= 500),
    link text check (link is null or link ~* '^https?://'),
    progresso int not null default 0 check (progresso between 0 and 100),
    criado_em timestamptz not null default now()
);

-- avaliacoes de livros, series e jogos
create table if not exists public.avaliacoes (
    id bigint generated always as identity primary key,
    tipo text not null check (tipo in ('livro', 'serie', 'jogo')),
    titulo text not null check (char_length(btrim(titulo)) between 1 and 80),
    nota int not null check (nota between 1 and 5),
    comentario text not null default '' check (char_length(comentario) <= 500),
    capa text,
    criado_em timestamptz not null default now()
);

-- essas tres todo mundo le e so eu escrevo
do $$
declare
    tabela text;
begin
    foreach tabela in array array['noticias', 'projetos', 'avaliacoes'] loop
        execute format('alter table public.%I enable row level security', tabela);
        execute format('drop policy if exists "todos leem" on public.%I', tabela);
        execute format('drop policy if exists "dono escreve" on public.%I', tabela);
        execute format('drop policy if exists "dono muda" on public.%I', tabela);
        execute format('drop policy if exists "dono apaga" on public.%I', tabela);
        execute format('create policy "todos leem" on public.%I for select using (true)', tabela);
        execute format('create policy "dono escreve" on public.%I for insert with check (public.eh_dono())', tabela);
        execute format('create policy "dono muda" on public.%I for update using (public.eh_dono()) with check (public.eh_dono())', tabela);
        execute format('create policy "dono apaga" on public.%I for delete using (public.eh_dono())', tabela);
        execute format('grant select on public.%I to anon, authenticated', tabela);
        execute format('grant insert, update, delete on public.%I to authenticated', tabela);
    end loop;
end;
$$;

-- registros tambem da pra editar
drop policy if exists "dono muda" on public.registros;
create policy "dono muda" on public.registros for update using (public.eh_dono()) with check (public.eh_dono());
grant update on public.registros to authenticated;


-- amigos (a pessoa se adiciona com foto, eu apago)
create table if not exists public.amigos (
    id bigint generated always as identity primary key,
    nome text not null check (char_length(btrim(nome)) between 1 and 30),
    foto text not null check (foto like 'data:image/jpeg;base64,%' and char_length(foto) <= 80000),
    criado_em timestamptz not null default now()
);

drop trigger if exists antispam on public.amigos;
create trigger antispam before insert on public.amigos
    for each row execute function public.antispam();

alter table public.amigos enable row level security;

drop policy if exists "todos leem" on public.amigos;
drop policy if exists "todos entram" on public.amigos;
drop policy if exists "dono apaga" on public.amigos;
create policy "todos leem" on public.amigos for select using (true);
create policy "todos entram" on public.amigos for insert with check (true);
create policy "dono apaga" on public.amigos for delete using (public.eh_dono());

grant select, insert on public.amigos to anon, authenticated;
grant delete on public.amigos to authenticated;


-- zap do lucas (chat aberto, mensagem some em 7 dias)
create table if not exists public.zap (
    id bigint generated always as identity primary key,
    nome text not null check (char_length(btrim(nome)) between 1 and 20),
    texto text not null check (char_length(btrim(texto)) between 1 and 300),
    dono boolean not null default false,
    criado_em timestamptz not null default now()
);

create or replace function public.zap_limpeza()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
    recentes int;
begin
    new.criado_em := now();
    delete from public.zap where criado_em < now() - interval '7 days';
    select count(*) into recentes from public.zap where criado_em > now() - interval '1 minute';
    if recentes >= 30 then
        raise exception 'muitas mensagens seguidas, tente mais tarde';
    end if;
    return new;
end;
$$;

drop trigger if exists limpeza on public.zap;
create trigger limpeza before insert on public.zap
    for each row execute function public.zap_limpeza();

alter table public.zap enable row level security;

drop policy if exists "ultimos 7 dias" on public.zap;
drop policy if exists "todos mandam" on public.zap;
drop policy if exists "dono apaga" on public.zap;
create policy "ultimos 7 dias" on public.zap for select using (criado_em > now() - interval '7 days');
-- so eu mando mensagem marcada como dono
create policy "todos mandam" on public.zap for insert with check (dono = false or public.eh_dono());
create policy "dono apaga" on public.zap for delete using (public.eh_dono());

grant select, insert on public.zap to anon, authenticated;
grant delete on public.zap to authenticated;
