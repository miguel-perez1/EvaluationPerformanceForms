import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName, ValidatorFn, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { IExecutiveForm } from '../../interfaces/executive-form';
import { ExecutiveFormService } from '../../services/executive-form.service';


function ratingRange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
        if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { 'range': true };
        };
        return null;
    };
}

@Component({
    selector: 'app-execute-form',
    templateUrl: './execute-form.component.html',
    styleUrls: ['./execute-form.component.css']
})
/** execute-form component*/
export class ExecuteFormComponent implements OnInit{
    /** execute-form ctor */
    pageTitle: string = 'Basic Edit';
    errorMessage: string;
    executiveForm: FormGroup;
    executive: IExecutiveForm;
    private sub: Subscription;

    get section2(): FormArray{
        return <FormArray>this.executiveForm.get('section2');
    }
    get section5(): FormArray {
        return <FormArray>this.executiveForm.get('section5');
    }

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private ExecutiveFormService: ExecutiveFormService) { }

    ngOnInit(): void {
        this.executiveForm = this.fb.group({
            //basic
            name: ['', [Validators.required, Validators.minLength(3)]],
            title: ['', [Validators.required, Validators.minLength(3)]],
            department: ['', [Validators.required, Validators.minLength(3)]],
            period: ['', [Validators.required, Validators.minLength(3)]],
            division: ['', [Validators.required, Validators.minLength(3)]],
            reviewType: ['', [Validators.required, Validators.minLength(3)]],
            sapNum: ['', [Validators.required, Validators.minLength(3)]],
            //section2
            section2: this.fb.array([this.buildEntry2()]),
            //section 3
            teamworkRating: ['', ratingRange(1, 4)],
            integRating: ['', ratingRange(1, 4)],
            innovaRating: ['', ratingRange(1, 4)],
            profRating: ['', ratingRange(1, 4)],
            //section 4
            ladRating: ['', ratingRange(1, 4)],
            stratRating: ['', ratingRange(1, 4)],
            excellenceRating: ['', ratingRange(1, 4)],
            decisionRating: ['', ratingRange(1, 4)],
            pdpRating: ['', ratingRange(1, 4)],
            //section 5
            section5: this.fb.array([this.buildEntry5()]),
            //section 6
            sixSummary: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            //section 7
            revComments: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            employeeComments: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        });

        // Read the executive info from the route parameter
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getExecutiveForm(id);
            }
        );
    }
    addEntry2(): void {
        this.section2.push(this.buildEntry2());
    }
    addEntry5(): void {
        this.section5.push(this.buildEntry5());
    }
    deleteEntry2(i: number): void {
        if (i > 1) {
            this.section2.removeAt(i);
        }
    }
    deleteEntry5(i: number): void {
        if (i > 1) {
            this.section5.removeAt(i);
        }
    }
    buildEntry2(): FormGroup {
        return this.fb.group({
            twoPercent: ['', [Validators.required, Validators.minLength(3)]],
            twoRating: ['', ratingRange(1, 4)],
            twoResponsibility: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            twoSummary: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
        });
    }
    buildEntry5(): FormGroup {
        return this.fb.group({
            fiveTime: ['', [Validators.required, Validators.minLength(3)]],
            fiveSummary: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
        });
    }
    populateTestData(): void {
        this.executiveForm.patchValue({
            name: 'John Doe',
            title: 'Manager',
            department: 'Information Technology', // drop down cell, doesn't populate
            division: 'Help Desk',
            reviewType: 'Planning',
            sapNum: '123456'
        });
    }
    populateTestData2(): void {
        this.executiveForm.patchValue({
            percent: '100%',
            rating: '11/10',
            responsibility: 'Make the code gud.',
            summary: 'This is a summary.'
        });
    }
    getExecutiveForm(id: number): void {
        this.ExecutiveFormService.getExecutiveForm(id)
            .subscribe(
            (executive: IExecutiveForm) => this.onBasicInfoRetrieved(executive),
            (error: any) => this.errorMessage = <any>error
            );
    }
    onBasicInfoRetrieved(basicInfo: IExecutiveForm): void {
        if (this.executiveForm) {
            this.executiveForm.reset();
        }
        this.executive = basicInfo;

        if (this.executive.id === 0) {
            this.pageTitle = 'Add Basic Info';
        } else {
            this.pageTitle = `Edit Basic Info: ${this.executive.name}`;
        }

        // Update the data on the form
        this.executiveForm.patchValue({
            name: this.executive.name,
            title: this.executive.title,
            division: this.executive.division,
            sapNum: this.executive.sapNum
        });
    }
    save() {
        console.log(this.executiveForm);
        console.log('Saved: ' + JSON.stringify(this.executiveForm.value));
    }
    deleteExecutiveForm(): void {
        if (this.executive.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        } else {
            if (confirm(`Really delete the form: ${this.executive.name}?`)) {
                this.ExecutiveFormService.deleteExecutiveForm(this.executive.id)
                    .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any>error
                    );
            }
        }
    }
    saveExecutiveForm(): void {
        if (this.executiveForm.dirty && this.executiveForm.valid) {
            // Copy the form values over the basic object values
            let p = Object.assign({}, this.executive, this.executiveForm.value);

            this.ExecutiveFormService.saveExecutiveForm(p)
                .subscribe(
                () => this.onSaveComplete(),
                (error: any) => this.errorMessage = <any>error
                );
        } else if (!this.executiveForm.dirty) {
            this.onSaveComplete();
        }
    }

    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.executiveForm.reset();
        this.router.navigate(['/listView']);
    }
}