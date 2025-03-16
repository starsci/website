import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "media" RENAME COLUMN "cloud_public_id" TO "public_id";
  ALTER TABLE "media" RENAME COLUMN "cloudinary_u_r_l" TO "cdn_url";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "alt";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "media" ADD COLUMN "alt" varchar NOT NULL;
  ALTER TABLE "media" ADD COLUMN "cloud_public_id" varchar;
  ALTER TABLE "media" ADD COLUMN "cloudinary_u_r_l" varchar;
  ALTER TABLE "media" DROP COLUMN IF EXISTS "public_id";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "cdn_url";`)
}
