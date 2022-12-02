import { Application, Request, Response, Router } from "express";
import { Body, Get, Post, Route } from "tsoa";
import { AppBinder } from "../utils/app-binder";
import { PostServices } from "../services/post-services";
import { PostResponse, toPostResponses } from "../adapters/out/PostResponse";
import { PostRequest } from "../adapters/in/PostRequest";
import { RequestBody } from "../adapters/in/RequestBody";

@Route("posts")
export class PostController implements AppBinder {
        
    private static instance: PostController;

    public static getInstance(): PostController {
        if (!PostController.instance) {
            PostController.instance = new PostController();
        }
        return PostController.instance;
    }

    private postServices: PostServices;

    private constructor() { 
        this.postServices = new PostServices();
    }

    public bind(app: Application): void {
        const router: Router = Router();

        router.get("/", async (req: Request, res: Response): Promise<void> => {
            const posts: PostResponse[] = await PostController.instance.getAll();
            res.json(posts);
        });

        router.post("/", async (req: RequestBody<PostRequest>, res: Response): Promise<void> => {
            const post: PostResponse = await PostController.instance.create(req.body);
            res.json(post);
        });
        
        app.use("/posts", router);
    }

    @Get('/')
    private async getAll(): Promise<PostResponse[]> {
        const postResponses = await this.postServices.retrieveAll();
        return toPostResponses(postResponses);
    } 
    
    @Post("/")
    private async create(@Body() post: PostRequest): Promise<PostResponse> {
        return await this.postServices.create(post);
    } 

}