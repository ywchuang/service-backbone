import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
class User {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

}

export { User };
