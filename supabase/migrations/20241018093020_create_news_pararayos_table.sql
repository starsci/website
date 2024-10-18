create table news_pararayos
(
    id          bigint primary key generated always as identity,
    title       text                                   not null,
    authors     text[] not null,
    createdAt   timestamp with time zone default now() not null,
    body        text                                   not null,
    thumbnailId text                                   not null
);