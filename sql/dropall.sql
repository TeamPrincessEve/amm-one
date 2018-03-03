--select 'drop table if exists "' || tablename || '" cascade;' from pg_tables where schemaname = 'public';

DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
