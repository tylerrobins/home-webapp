import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert, BeforeUpdate, ManyToMany, JoinTable } from "typeorm";
import Home from "./home.entity";
import Ingredient from "./ingredient.entity";

@Entity()
export default class Meal {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    description?: string;

    @Column()
    rating?: number;

    @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column("timestamp", { default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updatedAt: Date;

    @ManyToOne(() => Home, (home) => home.meals)
    home: Home;

    @ManyToMany(() => Ingredient, (ingredient) => ingredient.meals)
    @JoinTable()
    ingredients: Ingredient[];

    @BeforeInsert()
    updateCreatedAt(){
        this.createdAt = new Date();
    }

    @BeforeUpdate()
    updateUpdatedAt(){
        this.updatedAt = new Date();
    }
};