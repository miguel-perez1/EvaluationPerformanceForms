import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { IExecutiveForm } from '../../interfaces/executive-form';
import { ExecutiveFormService } from '../../services/executive-form.service';

@Component({
    selector: 'listView',
    templateUrl: './listView.component.html',
    styleUrls: ['./listView.component.css'],
    providers: [ ExecutiveFormService ]
})

export class ListViewComponent implements OnInit {
    pageTitle: string = 'Forms List';
    listFilter: string;
    errorMessage: string;

    executives: IExecutiveForm[];

    constructor(private ExecutiveFormService: ExecutiveFormService) {

    }

    ngOnInit(): void {
        this.ExecutiveFormService.getExecutiveForms()
            .subscribe(executives => this.executives = executives,
            error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Basic Info List: ' + message;
    }
}
