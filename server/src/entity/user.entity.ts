import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, ManyToOne } from "typeorm"
import Home from './home.entity'

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ unique: true })
    username!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
    createdAt!: Date;

    @Column("timestamp", { default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updatedAt!: Date;

    @ManyToOne(() => Home, (home) => home.members)
    home: Home

    @BeforeInsert()
    updateCreatedAt() {
        this.createdAt = new Date();
    }

    @BeforeUpdate()
    updateUpdatedAt() {
        this.updatedAt = new Date();
    }
}