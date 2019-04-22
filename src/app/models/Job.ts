//Table Values of a Job
export interface Job {
    MatchedObjectId: number;
    PositionTitle: string;
    PositionLocation: string;
    PositionStartDate: Date;
    PositionEndDate: Date;
    JobSummary: string;
    TotalOpenings: number;
    MinimumRange: number;
    MaximumRange: number;
    RateIntervalCode: string;
}