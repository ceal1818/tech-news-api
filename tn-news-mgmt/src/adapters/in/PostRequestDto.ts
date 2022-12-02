import { IsBoolean, IsDefined, IsUUID, IsEmpty } from 'class-validator';
import { EntityValidable } from '../../middlewares/validator';

export class PostRequestDto extends EntityValidable {
    
    @IsDefined()
    @IsUUID()
    uuid!: string;
    
    @IsDefined()
    title!: string;
    
    @IsDefined()
    content!: string;
    
    @IsDefined()
    @IsBoolean()
    anonymous!: boolean;
    
    @IsDefined()
    @IsUUID()
    @IsEmpty()
    authorUuid!: string | null;
    
    @IsDefined()
    @IsBoolean()
    wasDeleted!: boolean;
    
    @IsDefined()
    @IsEmpty()
    createdAt!: Date;

    @IsDefined()
    updatedAt!: Date | null;
    
}