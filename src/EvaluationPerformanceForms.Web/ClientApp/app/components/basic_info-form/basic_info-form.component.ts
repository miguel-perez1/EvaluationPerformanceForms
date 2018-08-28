import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Basic } from '../../models/basic_info';

@Component({
    selector: 'app-basic_info-form',
    templateUrl: './basic_info-form.component.html',
    styleUrls: ['./basic_info-form.component.css']
})
/** execute-form component*/
export class Basic_infoFormComponent implements OnInit {
    /** execute-form ctor */
    basicForm: FormGroup;
    basic: Basic = new Basic();

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.basicForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            title: ['', [Validators.required, Validators.minLength(3)]],
            department: ['', [Validators.required, Validators.minLength(3)]],
            period: ['', [Validators.required, Validators.minLength(3)]],
            division: ['', [Validators.required, Validators.minLength(3)]],
            reviewType: ['', [Validators.required, Validators.minLength(3)]],
            sapNum: ['', [Validators.required, Validators.minLength(3)]]
        });
    }

    populateTestData(): void {
        this.basicForm.patchValue({
            name: 'John Doe',
            title: 'Manager',
            department: 'Information Technology', // drop down cell, doesn't populate
            division: 'Help Desk',
            reviewType: 'Planning',
            sapNum: '123456'
        });
    }

    save() {
        console.log(this.basicForm);
        console.log('Saved: ' + JSON.stringify(this.basicForm.value));
    }
}