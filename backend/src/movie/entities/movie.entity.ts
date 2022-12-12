import { Score } from 'src/score/entities/score.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_movie')
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column({ length: 1000 })
  sinopse: string;
  @Column()
  image: string;

  @ManyToMany(() => Score, { eager: true })
  @JoinTable()
  scores: Score[];




}
