import { Application } from "express";

export interface AppBinder {
    
    bind(app: Application): void;

};