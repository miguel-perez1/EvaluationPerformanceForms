export interface IExecutiveForm {
    id: number;
    name: string;
    title: string;
    sapNum: string;
    period: string;
    division: string;
    twoPercent?: string[];
    twoRating?: string[];
    twoResponsibility?: string[];
    twoSummary?: string[];
    teamworkRating: string;
    integRating: string;
    innovaRating: string;
    profRating: string;
    ladRating: string;
    stratRating: string;
    excellenceRating: string;
    decisionRating: string;
    pdpRating: string;
    fiveTime?: string[];
    fiveSummary?: string[];
    sixSummary: string;
    revComments: string;
    employeeComments: string;
}