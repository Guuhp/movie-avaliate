import { Movie } from 'src/movie/entities/movie.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  email: string;
  @Column()
  score:number

  @ManyToMany(() => Movie)
  @JoinTable()
  users:Movie[]
}