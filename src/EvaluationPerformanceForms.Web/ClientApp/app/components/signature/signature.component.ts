import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Signature } from './signature'; //model class
import { DateValidator } from '../../shared/DateValidation'; //custom date validation

@Component({
    selector: 'app-signature',
    templateUrl: './signature.component.html',
    styleUrls: ['./signature.component.css']
})
/** signature component*/
export class SignatureComponent implements OnInit {
    signatureForm: FormGroup;
    signatureModel: Signature = new Signature();

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.signatureForm = this.fb.group({
            supervisorSignature: ['', [Validators.required, Validators.minLength(3)]],
            supervisorDate: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), DateValidator.usDate]], 
            supervisorSap: ['', [Validators.required, Validators.min(6), Validators.max(6)]], //sap # have to be exactly 6 digits
            officerSignature: ['', [Validators.required, Validators.minLength(3)]],
            officerDate: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), DateValidator.usDate]],
            officerSap: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
            employeeSignature: ['', [Validators.required, Validators.minLength(3)]],
            employeeDate: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), DateValidator.usDate]]
            
        });
    }

    populateTestData(): void {
        this.signatureForm.patchValue({
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

    save() {
        console.log(this.signatureForm);
        console.log('Saved: ' + JSON.stringify(this.signatureForm.value));
    }
}