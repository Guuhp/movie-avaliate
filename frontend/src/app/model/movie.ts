import { Score } from "./score";

export interface Movie {
  id?: string;
  title?: string;
  sinopse?: string;
  image?: string;
  scores?: Score[];

}
