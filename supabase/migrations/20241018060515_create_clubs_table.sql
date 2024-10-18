create table clubs (
  id bigint primary key generated always as identity,
  name text not null,
  description text not null,
  logoId text not null
);