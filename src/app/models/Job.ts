//Table Values of a Job
export interface Job {
    MatchedObjectId: number;
    PositionTitle: string;
    PositionLocation: object;
    PositionStartDate: Date;
    PositionEndDate: Date;
    MajorDuties: Text;
    Requirements: Text;
    JobSummary: Text;
    LowGrade: string;
    HighGrade: string;
}