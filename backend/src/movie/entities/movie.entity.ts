import { User } from './../../user/entities/user.entity';
import {
    Column,
    Double,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    score: number;
    @Column()
    count: number;
    @Column()
    image: string;
}
