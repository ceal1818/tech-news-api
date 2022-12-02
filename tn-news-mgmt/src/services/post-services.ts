import { Post } from "../entities/post";
import { PostRepository } from "../repository/post-repository";

export class PostServices {

    private postRepository: PostRepository;

    constructor () {
        this.postRepository = new PostRepository();
    }

    public async retrieveAll(): Promise<Post[]> {
        return await this.postRepository.retrieveAll();
    }

    public async create(post: Post): Promise<Post> {
        return await this.postRepository.create(post);
    }

    public async bulkCreate(posts: Post[]): Promise<Post[]> {
        return await this.postRepository.bulkCreate(posts);
    }

}