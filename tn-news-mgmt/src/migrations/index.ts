import * as dotenv from "dotenv";

import { startConnection } from "../bootstrap/ddbb";
import { PostServices } from "../services/post-services";

import jsonPosts from "../migrations/data/posts.json";
import { Post } from "../entities/post";
import { mapPostEntity } from "./PostMapper";

dotenv.config();

const startInitialMigrate = async () => {
    
    await startConnection();

    const postServices: PostServices = new PostServices();

    const existingPosts: Post[] = await postServices.retrieveAll();

    if (existingPosts.length == 0) {
        await postServices.bulkCreate(jsonPosts.map(mapPostEntity));
    }
};

startInitialMigrate().then(() => {
    console.log("The migration was completed successfully.");
    process.exit();
});