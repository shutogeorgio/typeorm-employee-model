import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Address {

    @Column()
    country: string;
  
    @Column()
    state: string;

    @Column()
    city: string;

    @Column()
    zip: number;

}
