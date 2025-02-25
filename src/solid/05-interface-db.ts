import { Post } from "./05-dependency-b";

export interface DatabaseService {

  getPosts(): Promise<Post[]>;


}