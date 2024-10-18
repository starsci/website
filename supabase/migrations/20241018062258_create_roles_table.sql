create table roles
(
    id   bigint primary key generated always as identity,
    name text not null
);