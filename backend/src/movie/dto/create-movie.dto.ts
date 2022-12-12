import { Score } from "src/score/entities/score.entity";

export class CreateMovieDto {

  title: string;
  sinopse: string;
  image: string;
  scores?: Score[];
}
