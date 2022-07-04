import {MigrationInterface, QueryRunner} from "typeorm";

export class baseDatabase1656906915117 implements MigrationInterface {
    name = 'baseDatabase1656906915117'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "parking_area" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "version" integer NOT NULL DEFAULT '1', "floor" integer NOT NULL, "floor_area" integer NOT NULL, "floor_size" integer NOT NULL, CONSTRAINT "PK_864127a5917f9114dd620336439" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parking_slip" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "version" integer NOT NULL DEFAULT '1', "cost" double precision NOT NULL, "penalty" boolean NOT NULL DEFAULT false, "exit_date" TIMESTAMP, "customerId" uuid, "parkingAreaId" uuid, CONSTRAINT "PK_2dba4736ef3458879f58dca3229" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "version" integer NOT NULL DEFAULT '1', "name" character varying NOT NULL, "vehicle_number" character varying NOT NULL, "contact_number" character varying NOT NULL, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "parking_slip" ADD CONSTRAINT "FK_e0d5ac57cb6b3fe5cf6fc22e67b" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parking_slip" ADD CONSTRAINT "FK_54a5b2d70b17422168574df10c9" FOREIGN KEY ("parkingAreaId") REFERENCES "parking_area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parking_slip" DROP CONSTRAINT "FK_54a5b2d70b17422168574df10c9"`);
        await queryRunner.query(`ALTER TABLE "parking_slip" DROP CONSTRAINT "FK_e0d5ac57cb6b3fe5cf6fc22e67b"`);
        await queryRunner.query(`DROP TABLE "customer"`);
        await queryRunner.query(`DROP TABLE "parking_slip"`);
        await queryRunner.query(`DROP TABLE "parking_area"`);
    }

}
