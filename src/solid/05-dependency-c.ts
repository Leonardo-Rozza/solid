import { Post } from "./05-dependency-b";
import { DatabaseService } from "./05-interface-db";
import localPosts from "../data/local-database.json"

export class LocalDataBaseService implements DatabaseService {
  constructor() {}

  async getPosts() {
    return [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
      },
    ];
  }
}

export class JsonDataBaseService implements DatabaseService {
  constructor() {}
  
  async getPosts(): Promise<Post[]> {
    return localPosts;  // Retornamos los posts del archivo local-database.json.
  }

}


export class WebApiPostService implements DatabaseService {
  constructor() { }
 
  async getPosts(): Promise<Post[]> {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    return json as Post[];


  }
  

  
}
