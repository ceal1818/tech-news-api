import { prop, getModelForClass } from '@typegoose/typegoose';

export class Post {
    
    @prop({ required: true })
    public uuid!: string;
    
    @prop({ required: true })
    public title!: string;
    
    @prop({ required: true })
    public content!: string;
    
    @prop({ required: false, default: true })
    public anonymous!: boolean;
    
    @prop({ required: false, default: null })
    public authorUuid!: string | null;
    
    @prop({ required: false, default: false })
    public wasDeleted!: boolean;
    
    @prop({ required: true })
    public createdAt!: Date;
    
    @prop({ required: false, default: null })
    public updatedAt!: Date | null;

}

export const PostModel = getModelForClass(Post);