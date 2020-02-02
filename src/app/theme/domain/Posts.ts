import { CompanyDetails } from './CompanyDetails';

export interface Posts {
    id: string;
    title: string;
    experiance: number;
    salary: number;
    jobDescription: string;
    postDate: number;
    details: CompanyDetails;
}