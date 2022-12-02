import { Post } from "../entities/post";

export const mapPostEntity = (json: any): Post => {
    const { uuid, title, content, anonymous, authorUuid, wasDeleted, createdAt } = json;
    const post: Post = {
        uuid, 
        title, 
        content, 
        anonymous, 
        authorUuid, 
        wasDeleted, 
        createdAt: new Date(createdAt), 
        updatedAt: null
    };
    return post;
}
