import { ApiProperty } from '@nestjs/swagger';

export class SimiMvDto {
    @ApiProperty({ description: ' 必选参数 : mvid', required: true })
    mvid: string;
}
export class SimiUserDto {
    @ApiProperty({ description: ' 必选参数 : id', required: true })
    id: string;
}