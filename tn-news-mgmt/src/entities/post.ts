export interface Post {
    uuid: string,
    title: string,
    content: string,
    anonymous: boolean,
    authorUuid: string | null,
    wasDeleted: boolean,
    createdAt: Date,
    updatedAt: Date | null,
};