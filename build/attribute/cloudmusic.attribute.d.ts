import { IModelType } from '../interface/model.interface';
export declare class TopSongAttribute {
    id: string;
    groupId: string;
    name: string;
    description?: string | null;
    isSystem: number;
    isDisabled: IModelType.IS_DISABLED;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
