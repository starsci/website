-- create users table with ID (LRN/Employee Number), first and last name, 
-- roles (multiple, FK to roles table), and club memberships (multiple, FK to clubs table)
create table users
(
    id        text primary key,
    firstName text not null,
    lastName  text not null
);