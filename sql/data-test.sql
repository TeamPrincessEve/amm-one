DROP TABLE testaccount;

--Can use COLLATE "th" cuz add locale to ubuntu and then run 2 below command (sudo locale-gen th_TH.UTF-8)
--select * from pg_collation;
--CREATE COLLATION th (locale = 'th_TH.utf8');

-- CREATE TABLE testaccount (
--     testaccount_id      SERIAL PRIMARY KEY,
--     user_name       VARCHAR(50) COLLATE "th_TH.utf8",
--     name            VARCHAR(50),
--     surname         VARCHAR(50),
--     birth_date      DATE
-- );

CREATE TABLE testaccount (
    testaccount_id      SERIAL PRIMARY KEY,
    user_name       VARCHAR(50),
    name            VARCHAR(50),
    surname         VARCHAR(50),
    birth_date      DATE
);

insert into testaccount (user_name, name) values ('ภาษาไทย', 'ภาษาไทย');
insert into testaccount (user_name, name) values ('การบ้าน', 'การบ้าน');
insert into testaccount (user_name, name) values ('การเรือน','การเรือน');
insert into testaccount (user_name, name) values ('โฮ่ง','โฮ่ง');
insert into testaccount (user_name, name) values ('ฮา 😅','ฮา 😅');
insert into testaccount (user_name, name) values ('ข้าวหอม','ข้าวหอม');

insert into testaccount (user_name, name) values ('English','English');
insert into testaccount (user_name, name) values ('O k','O k');
insert into testaccount (user_name, name) values ('O a','O a');
insert into testaccount (user_name, name) values ('Oa','Oa');
insert into testaccount (user_name, name) values ('Ok','Ok');
insert into testaccount (user_name, name) values ('Oz','Oz');
insert into testaccount (user_name, name) values ('O z','O z');
insert into testaccount (user_name, name) values ('oz','oz');
insert into testaccount (user_name, name) values ('o z','o z');
insert into testaccount (user_name, name) values ('oZ','oZ');
insert into testaccount (user_name, name) values ('o Z','o Z');

--select * from testaccount order by user_name;
select * from testaccount order by user_name collate "th_TH.utf8";

select * from testaccount order by user_name collate "th";

select * from testaccount where user_name like '%o%';

