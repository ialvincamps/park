import {
    BaseEntity as TypeOrmBaseEntity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    VersionColumn,
    DeleteDateColumn,
} from 'typeorm';

export abstract class BaseEntity extends TypeOrmBaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public id?: string;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt?: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    public updatedAt?: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    public deletedAt?: Date;

    @VersionColumn({ default: 1 })
    public version?: number;
}
