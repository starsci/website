create table news_pararayos
(
    id           bigint primary key generated always as identity,
    title        text                                   not null,
    authors      text[]                                 not null,
    created_at   timestamp with time zone default now() not null,
    body         text                                   not null,
    thumbnail_id text                                   not null
);