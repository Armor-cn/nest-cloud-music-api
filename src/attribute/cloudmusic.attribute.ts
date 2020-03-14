import { ApiProperty } from '@nestjs/swagger';
import { IModelType } from '../interface/model.interface';

// 暂时先随便设置返回字段
export class TopSongAttribute {
    @ApiProperty({ description: 'ID', required: true })
    id: string;
    @ApiProperty({ description: '租户ID', required: true })
    groupId: string;
    @ApiProperty({ description: '名称', required: true })
    name: string;
    @ApiProperty({ description: '描述', required: false })
    description?: string | null;
    @ApiProperty({ description: '是否是系统项', required: true })
    isSystem: number;
    @ApiProperty({ description: '是否禁用', required: true })
    isDisabled: IModelType.IS_DISABLED;
    @ApiProperty({ description: '创建时间', required: false })
    createdAt?: Date;
    @ApiProperty({ description: '更新时间', required: false })
    updatedAt?: Date;
    @ApiProperty({ description: '删除时间', required: false })
    deletedAt?: Date | null;
}