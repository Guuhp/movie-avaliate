import { Movie } from 'src/movie/entities/movie.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_score')
export class Score {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({length:10})
  username: string;
  @Column()
  score: string;

}
