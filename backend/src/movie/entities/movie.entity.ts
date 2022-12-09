import { Score } from 'src/score/entities/score.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_movie')
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  sinopse: string;
  @Column()
  image: string;

  @OneToMany(() => Score, (score) => score.movies, { cascade: true })
  scores: Score[]

}
