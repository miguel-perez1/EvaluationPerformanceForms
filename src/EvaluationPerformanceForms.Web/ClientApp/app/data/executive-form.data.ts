import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IExecutiveForm } from '../interfaces/executive-form';

export class ExecutiveFormData implements InMemoryDbService {

    createDb() {
        let executive: IExecutiveForm[] = [
            {
                'id': 1,
                'name': 'Name 1',
                'title': 'Title 1',
                'sapNum': 'SAP 1',
                'period': 'period 1',
                'division': 'test',
                'twoPercent': ['test'],
                'twoRating': ['test'],
                'twoResponsibility': ['test'],
                'twoSummary': ['test'],
                'teamworkRating': 'test',
                'integRating': 'test',
                'innovaRating': 'test',
                'profRating': 'test',
                'ladRating': 'test',
                'stratRating': 'test',
                'excellenceRating': 'test',
                'decisionRating': 'test',
                'pdpRating': 'test',
                'fiveTime': ['test'],
                'fiveSummary': ['test'],
                'sixSummary': 'test',
                'revComments': 'test',
                'employeeComments': 'test'
            },
            {
                'id': 2,
                'name': 'Name 2',
                'title': 'Title 2',
                'sapNum': 'SAP 2',
                'period': 'period 2',
                'division': 'test',
                'twoPercent': ['test'],
                'twoRating': ['test'],
                'twoResponsibility': ['test'],
                'twoSummary': ['test'],
                'teamworkRating': 'test',
                'integRating': 'test',
                'innovaRating': 'test',
                'profRating': 'test',
                'ladRating': 'test',
                'stratRating': 'test',
                'excellenceRating': 'test',
                'decisionRating': 'test',
                'pdpRating': 'test',
                'fiveTime': ['test'],
                'fiveSummary': ['test'],
                'sixSummary': 'test',
                'revComments': 'test',
                'employeeComments': 'test'
            }
        ];
        return { executive };
    }
}