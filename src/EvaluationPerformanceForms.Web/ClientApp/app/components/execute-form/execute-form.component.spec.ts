/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ExecuteFormComponent } from './execute-form.component';

let component: ExecuteFormComponent;
let fixture: ComponentFixture<ExecuteFormComponent>;

describe('execute-form component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ExecuteFormComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ExecuteFormComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});