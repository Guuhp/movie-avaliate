import { Movie } from "src/movie/entities/movie.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_score')
export class Score {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  email: string;
  @Column()
  score: string;

  @ManyToOne(() => Movie, (movie) => movie.scores, { eager: true })
  movies: Movie;


}
