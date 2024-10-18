create table user_club_junction
(
    user_id bigint not null,
    club_id bigint not null,
-- foreign key from user_id to users.id
    foreign key (user_id) references users (id),
-- foreign key from club_id to clubs.id
    foreign key (club_id) references clubs (id)
);