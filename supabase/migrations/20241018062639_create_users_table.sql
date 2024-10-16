-- create users table with ID (LRN/Employee Number), first and last name, 
-- roles (multiple, FK to roles table), and club memberships (multiple, FK to clubs table)
create table users
(
    id         bigint primary key generated always as identity,
    first_name text not null,
    last_name  text not null,
    auth_id    uuid not null,
    foreign key (auth_id) references auth.users (id)
);