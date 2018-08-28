import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'formView',
    templateUrl: './formView.component.html',
    styleUrls: ['./formView.component.css']
})

export class FormViewComponent implements OnInit {



    constructor(private _router: Router) { }

    ngOnInit() {

    }

    goEx(): void {
        this._router.navigate(['/executive/0']);
    }
    goPerf(): void {
        this._router.navigate(['/performance']);
    }
    goStep(): void {
        this._router.navigate(['/step']);
    }
}
