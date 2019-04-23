//Table Values of a Job
export interface Job {
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