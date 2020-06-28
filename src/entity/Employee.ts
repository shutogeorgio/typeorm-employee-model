import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Address } from "./Address"

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    telephone: string;

    @Column()
    address: Address;


}
