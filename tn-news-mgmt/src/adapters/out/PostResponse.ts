import { Post } from "../../entities/post";

export interface PostResponse {
    uuid: string,
    title: string,
    content: string,
    anonymous: boolean,
    authorUuid: string | null,
    wasDeleted: boolean,
    createdAt: Date,
    updatedAt: Date | null,
};

export const toPostResponse = (post: Post): PostResponse => {
    const { uuid, title, content, anonymous, authorUuid, wasDeleted, createdAt, updatedAt } = post;
    return { uuid, title, content, anonymous, authorUuid, wasDeleted, createdAt, updatedAt };
};

export const toPostResponses = (posts: Post[] | null): PostResponse[] => {
    if (posts == null) {
        return [];
    }
    return posts.map(toPostResponse);
};
