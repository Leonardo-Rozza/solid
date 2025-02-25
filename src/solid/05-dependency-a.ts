

import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebApiPostService } from "./05-dependency-c";

// Main
(async () => {
 // const postService = new PostService(new LocalDataBaseService());
  // const postService = new PostService(new JsonDataBaseService());
  const postService = new PostService(new WebApiPostService());
  const posts = await postService.getPosts();

  console.log({ posts });
})();
