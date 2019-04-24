import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface JobTableItem {
    matched_object_id: number;
    position_title: string;
    position_location: string;
    position_start_date: Date;
    position_end_date: Date;
    job_summary: string;
    min_range: number;
    max_range: number;
    rate_interval_code: string;
}

// TODO: replace this with real data from your application


/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class JobTableDataSource extends DataSource<JobTableItem> {
    data: JobTableItem[]

    constructor(private paginator: MatPaginator, private sort: MatSort) {
        super();
        console.log(this.data);
    }

    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect(): Observable<JobTableItem[]> {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            observableOf(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];

        // Set the paginators length
        // this.paginator.length = this.data.length;

        return merge(...dataMutations).pipe(map(() => {
            return this.getPagedData(this.getSortedData([...this.data]));
        }));
    }

    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }

    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getPagedData(data: JobTableItem[]) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }

    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getSortedData(data: JobTableItem[]) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'matched_object_id': return compare(a.matched_object_id, b.matched_object_id, isAsc);
                case 'position_title': return compare(+a.position_title, +b.position_title, isAsc);
                case 'position_location': return compare(+a.position_location, +b.position_location, isAsc);
                case 'min_range': return compare(+a.min_range, +b.min_range, isAsc);
                case 'max_range': return compare(+a.max_range, +b.max_range, isAsc);
                default: return 0;
            }
        });
    }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}