import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, ManyToOne, ManyToMany } from "typeorm";

import Home from "./home.entity";
import Meal from "./meal.entity";

@Entity()
export default class Ingredient {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    desc!: string;

    @Column()
    protein?: number;
    
    @Column()
    carbs?: number;

    @Column()
    sugars?: number;

    @Column()
    fat?: number;

    @Column()
    saturatedFat?: number;

    @Column()
    sodium?: number;

    @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column("timestamp", { default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updatedAt: Date;

    @ManyToOne(() => Home, (home) => home.ingredients)
    home: Home;

    @ManyToMany(() => Meal, (meal) => meal.ingredients)
    meals: Meal[];

    @BeforeInsert()
    updateCreatedAt(){
        this.createdAt = new Date();
    }

    @BeforeUpdate()
    updateUpdatedAt(){
        this.updatedAt = new Date();
    }
};