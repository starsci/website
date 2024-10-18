create table clubs
(
    id          bigint primary key generated always as identity,
    name        text not null,
    description text not null,
    logo_id     text not null
);