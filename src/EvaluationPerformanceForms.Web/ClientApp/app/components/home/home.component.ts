import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private _router: Router) { }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    goEx(): void {
        this._router.navigate(['/execute']);
    }
    goPerf(): void {
        this._router.navigate(['/performance']);
    }
    goStep(): void {
        this._router.navigate(['/step']);
    }
}
