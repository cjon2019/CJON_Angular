//Table Values of a Job
export interface Job {
    MatchedObjectId: number;
    PositionTitle: string;
    PositionLocation: object;
    PositionStartDate: Date;
    PositionEndDate: Date;
    JobSummary: Text;
    MinimumRange: number;
    MaximumRange: number;
    RateIntervalCode: string;
}