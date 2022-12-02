import { Post, PostModel } from "./models/post";

export class PostRepository {
  public async retrieveAll(): Promise<Post[]> {
    return await PostModel.find();
  }

  public async create(post: Post): Promise<Post> {
    return PostModel.create(post);
  }

  public async bulkCreate(posts: Post[]): Promise<Post[]> {
    return PostModel.insertMany(posts);
  }

}
