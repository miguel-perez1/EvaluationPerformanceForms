import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IExecutiveForm } from '../interfaces/executive-form';

@Injectable()
export class ExecutiveFormService {

    private baseUrl = 'api/executive';

    constructor(private http: Http) {

    }

    getExecutiveForms(): Observable<IExecutiveForm[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .do(data => console.log('getBasicInfos: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    getExecutiveForm(id: number): Observable<IExecutiveForm> {
        if (id === 0) {
            return Observable.of(this.initializeExecutiveForm());
        };
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .do(data => console.log('getExecutiveForm: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    deleteExecutiveForm(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url, options)
            .do(data => console.log('deleteExecutiveForm: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    saveExecutiveForm(executive: IExecutiveForm): Observable<IExecutiveForm> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (executive.id === 0) {
            return this.createExecutiveForm(executive, options);
        }
        return this.updateExecutiveForm(executive, options);
    }
    private createExecutiveForm(executive: IExecutiveForm, options: RequestOptions): Observable<IExecutiveForm> {
        executive.id = undefined;
        return this.http.post(this.baseUrl, executive, options)
            .map(this.extractData)
            .do(data => console.log('createExecutiveForm: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private updateExecutiveForm(executive: IExecutiveForm, options: RequestOptions): Observable<IExecutiveForm> {
        const url = `${this.baseUrl}/${executive.id}`;
        return this.http.put(url, executive, options)
            .map(() => executive)
            .do(data => console.log('updateExecutiveForm: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    initializeExecutiveForm(): IExecutiveForm {
        // Return an initialized object
        return {
            id: 0,
            name: null,
            title: null,
            sapNum: null,
            period: null,
            division: null,
            twoPercent: [''],
            twoRating: [''],
            twoResponsibility: [''],
            twoSummary: [''],
            teamworkRating: null,
            integRating: null,
            innovaRating: null,
            profRating: null,
            ladRating: null,
            stratRating: null,
            excellenceRating: null,
            decisionRating: null,
            pdpRating: null,
            fiveTime: [''],
            fiveSummary: [''],
            sixSummary: null,
            revComments: null,
            employeeComments: null
        };
    }
}