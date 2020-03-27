import { ApiProperty } from '@nestjs/swagger';
import { BaseQueryDto } from '../dto/cloudmusic.dto';
import * as lodash from 'lodash';
export const _ = lodash;
export namespace Itype {
    export interface Object { [key: string]: any, }
}
/**
 *  通用分页
 */
export class PaginateFormat<T> {
    @ApiProperty({ description: '总共数量', required: true })
    total: number;
    @ApiProperty({ description: 'pageSize 映射', required: true })
    perPage: number;
    @ApiProperty({ description: '当前页数', required: true })
    currentPage: number;
    @ApiProperty({ description: '起始页数', required: true, default: 1 })
    firstPage: 1;
    @ApiProperty({ description: '最后页数', required: true })
    lastPage: number;
    @ApiProperty({ description: '相当于数据库的 offset', required: true })
    from: number;
    @ApiProperty({ description: '相当于数据库的 offset + pageSize', required: true })
    to: number;
    @ApiProperty({ description: '数据们', required: true, isArray: true })
    data: T[];
}

export class Paginate {
    public static renderManual<T>(rows: T[], query: BaseQueryDto): PaginateFormat<T> | T[] {
        if (query && query.pageMode === 'no') return rows;
        const from = (query.page - 1) * query.pageSize;
        const to = from + query.pageSize - 2;
        const data = _.slice(rows, from, to);
        return this.render({ rows: data, count: rows.length }, query);
    }

    public static renderCompatible<T>(pages: { rows: T[], count: number }, query: Itype.Object): PaginateFormat<T> | T[] {
        let page = 1;
        let pageSize = 25;
        if (query.page != null) page = Number(query.page);
        if (query.pageSize != null) pageSize = Number(query.pageSize);
        const queryTmp: BaseQueryDto = {
            page,
            pageSize,
            pageMode: query.pageMode,
        };
        return this.render(pages, queryTmp);
    }

    public static render<T>(pages: { rows: T[], count: number }, query: BaseQueryDto): PaginateFormat<T> | T[] {
        if (query && query.pageMode === 'no') return pages.rows;
        const from = (query.page - 1) * query.pageSize + 1;
        const to = from + query.pageSize - 1;
        const lastPage = (pages.count - pages.count % query.pageSize) / query.pageSize + 1;
        const res: PaginateFormat<T> = {
            total: pages.count,
            perPage: query.pageSize,
            currentPage: query.page,
            firstPage: 1,
            lastPage,
            // nextPageUrl
            // prevPageUrl
            from,
            to,
            data: pages.rows,
        };
        return res;
    }
}
