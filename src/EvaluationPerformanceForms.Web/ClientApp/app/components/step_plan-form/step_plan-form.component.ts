import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { StepPayPlan } from './StepPayPlan'; //our data model
import { DateValidator } from '../../shared/DateValidation'; //import custom date validation from the shared folder

@Component({
    selector: 'app-step_plan-form', //leave these as is for now (rename later)
    templateUrl: './step_plan-form.component.html',
    styleUrls: ['./step_plan-form.component.css']
})

export class Step_planFormComponent implements OnInit {
    stepPayPlanForm: FormGroup; // root formgroup property
    stepModel: StepPayPlan = new StepPayPlan(); // data model

    get entries(): FormArray {
        return <FormArray>this.stepPayPlanForm.get('entries');
    }

    get goals(): FormArray {
        return <FormArray>this.stepPayPlanForm.get('goals');
    }

   

    constructor(private fb: FormBuilder) { } // so we can inject the FormBuilder service

    ngOnInit(): void {
        this.stepPayPlanForm = this.fb.group({
            //Basic section
            name: ['', [Validators.required, Validators.minLength(3)]],
            title: ['', [Validators.required, Validators.minLength(3)]],
            department: ['', [Validators.required, Validators.minLength(3)]],
            period: ['', [Validators.required, Validators.minLength(3)]],
            division: ['', [Validators.required, Validators.minLength(3)]],
            reviewType: ['', [Validators.required, Validators.minLength(3)]],
            sapNum: ['', [Validators.required, Validators.minLength(3)]],

            //sectionI
            teamworkRating: ['', [Validators.required, Validators.min(1), Validators.max(3)]], //I'm not sure if these validators will work, I could add the ratingRange custom validationFN Function
            integrityRating: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
            innovationRating: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
            professionalismRating: ['', [Validators.required, Validators.min(1), Validators.max(3)]],

            //sectionIV
            raterComments: ['', [Validators.required, Validators.minLength(3)]],
            //sectionV
            reviewerComments: ['', [Validators.required, Validators.minLength(3)]],
            employeeComments: ['', [Validators.required, Validators.minLength(3)]],

            //Signature section section VI
            supervisorSignature: ['', [Validators.required, Validators.minLength(3)]],
            supervisorDate: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), DateValidator.usDate]],
            supervisorSap: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]], //sap # have to be exactly 6 digits
            officerSignature: ['', [Validators.required, Validators.minLength(3)]],
            officerDate: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), DateValidator.usDate]],
            officerSap: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
            employeeSignature: ['', [Validators.required, Validators.minLength(3)]],
            employeeDate: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), DateValidator.usDate]],

            //sectionII
            //rating: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
            //responsibility: ['', [Validators.required, Validators.minLength(3)]], //keep these general validators for now
            //summary: ['', [Validators.required, Validators.minLength(3)]],

            entries: this.fb.array([this.buildEntry()]), // using a form array instead so we can duplicate section II entries

            //sectionIII
            //startDate: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), DateValidator.usDate]], //using the custom date validator
            //endDate: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), DateValidator.usDate]], 
            //milestone: ['', [Validators.required, Validators.minLength(3)]],

            goals: this.fb.array([this.buildGoal()])
        });
    }

    addEntry(): void { //when you press the add button, it should duplicate another section II element
        this.entries.push(this.buildEntry());
    }

    buildEntry(): FormGroup {
        return this.fb.group({
            //sectionII
            rating: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
            responsibility: ['', [Validators.required, Validators.minLength(3)]], //keep these general validators for now
            summary: ['', [Validators.required, Validators.minLength(3)]],
        });
    }

    addGoal(): void { 
        this.entries.push(this.buildGoal());
    }

    buildGoal(): FormGroup {
        return this.fb.group({
            //sectionIII
            startDate: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), DateValidator.usDate]], //using the custom date validator
            endDate: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), DateValidator.usDate]], 
            milestone: ['', [Validators.required, Validators.minLength(3)]],
        });
    }

    populateTestData(): void { //for testing purposes or demo purposes (side note, can we use this somehow for our auto-fill feature?)
        this.stepPayPlanForm.patchValue({
            //Basic section
            name: 'John Doe',
            sapNum: '123456',
            title: 'Manager',
            period: 'quarterly', //just a place holder
            department: 'Information Technology', // drop down cell, doesn't populate
            division: 'Help Desk',
            reviewType: 'Planning', //radio button how to populate?
            //Supervisor or above? //radio button
             
            //Section I
            teamworkRating: '3',
            integrityRating: '3',
            innovationRating: '3',
            professionalismRating: '3',

            //Section II
            rating: '3', 
            responsibility: 'Example Responsibility Here',
            summary: 'Example Summary Here',

            //Section III
            startDate: '08/01/2018',
            endDate: '08/30/2018',
            milestone: 'Example Goal Here',

            //Section IV
            raterComments: 'Example Comments Here',
            //Section V
            reviewerComments: 'Example Comments Here',
            employeeComments: 'Example Comments Here',
            
            //signature section
            supervisorSignature: 'Supervisor',
            supervisorDate: '08/30/2018',
            supervisorSap: '123456',
            officerSignature: 'Officer',
            officerDate: '08/30/2018',
            officerSap: '987654',
            employeeSignature: 'Employee',
            employeeDate: '08/30/2018'
            
        });
    }

    save() { //where is this saved to again? how is it saved?
        console.log(this.stepPayPlanForm);
        console.log('Saved: ' + JSON.stringify(this.stepPayPlanForm.value));
    }
}