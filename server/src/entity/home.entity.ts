import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert, BeforeUpdate, ManyToMany, ManyToOne } from "typeorm"
import User from './user.entity';
import Meal from './meal.entity';
import Ingredient from "./ingredient.entity";

@Entity()
export default class Home {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name!: string;

    @Column("timestamp", {default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;

    @Column("timestamp", {default: () => "CURRENT_TIMESTAMP", onUpdate:  "CURRENT_TIMESTAMP"})
    updatedAt: Date;

    @OneToMany(() => User, (user) => user.home)
    members: User[];

    @OneToMany(() => Meal, (meal) => meal.home)
    meals: Meal[];

    @OneToMany(() => Ingredient, (ingredient) => ingredient.home)
    ingredients: Ingredient[];

    @BeforeInsert()
    updateCreatedAt(){
        this.createdAt = new Date();
    };

    @BeforeUpdate()
    updateUpdatedAt(){
        this.updatedAt = new Date();
    };
};