import { ApiModelProperty } from '@nestjs/swagger';
import { IModelType } from '../interface/model.interface';

// 暂时先随便设置返回字段
export class TopSongAttribute {
    @ApiModelProperty({ description: 'ID', required: true })
    id: string;
    @ApiModelProperty({ description: '租户ID', required: true })
    groupId: string;
    @ApiModelProperty({ description: '名称', required: true })
    name: string;
    @ApiModelProperty({ description: '描述', required: false })
    description?: string | null;
    @ApiModelProperty({ description: '是否是系统项', required: true })
    isSystem: number;
    @ApiModelProperty({ description: '是否禁用', required: true })
    isDisabled: IModelType.IS_DISABLED;
    @ApiModelProperty({ description: '创建时间', required: false })
    createdAt?: Date;
    @ApiModelProperty({ description: '更新时间', required: false })
    updatedAt?: Date;
    @ApiModelProperty({ description: '删除时间', required: false })
    deletedAt?: Date | null;
}