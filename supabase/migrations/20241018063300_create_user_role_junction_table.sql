create table user_role_junction
(
    user_id bigint not null,
    role_id bigint not null,
-- foreign key from user_id to users.id
    foreign key (user_id) references users (id),
-- foreign key from role_id to roles.id
    foreign key (role_id) references roles (id)
);