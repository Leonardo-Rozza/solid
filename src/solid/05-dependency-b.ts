import { DatabaseService } from "./05-interface-db";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];
  // private obtenerPosts: DatabaseService;


  constructor(private obtenerPost: DatabaseService) {
    // this.obtenerPosts = obtenerPost;
  }

  async getPosts() {
    this.posts = await this.obtenerPost.getPosts();

    return this.posts;
  }
}