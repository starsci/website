import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "school_announcements" ADD COLUMN "front_page" boolean DEFAULT false;
  CREATE INDEX IF NOT EXISTS "admins_updated_at_idx" ON "admins" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "clubs_updated_at_idx" ON "clubs" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "school_announcements_updated_at_idx" ON "school_announcements" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "club_announcements_updated_at_idx" ON "club_announcements" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "the_satellite_news_updated_at_idx" ON "the_satellite_news" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "ang_pararayos_news_updated_at_idx" ON "ang_pararayos_news" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX IF EXISTS "admins_updated_at_idx";
  DROP INDEX IF EXISTS "users_updated_at_idx";
  DROP INDEX IF EXISTS "media_updated_at_idx";
  DROP INDEX IF EXISTS "clubs_updated_at_idx";
  DROP INDEX IF EXISTS "school_announcements_updated_at_idx";
  DROP INDEX IF EXISTS "club_announcements_updated_at_idx";
  DROP INDEX IF EXISTS "the_satellite_news_updated_at_idx";
  DROP INDEX IF EXISTS "ang_pararayos_news_updated_at_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_updated_at_idx";
  DROP INDEX IF EXISTS "payload_preferences_updated_at_idx";
  DROP INDEX IF EXISTS "payload_migrations_updated_at_idx";
  ALTER TABLE "school_announcements" DROP COLUMN IF EXISTS "front_page";`)
}
