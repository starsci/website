-- alter users table to create a foreign key from connect to auth.users.id
alter table users
    add column auth_id uuid not null,
    add constraint connect_fk
        foreign key (auth_id) references auth.users (id);