import { Application } from "express";

import { startConnection } from "../bootstrap/ddbb";
import { PostController } from "./post-controller";

export const initialize = async (app: Application): Promise<void> => {
  await startConnection();
  PostController.getInstance().bind(app);
};
