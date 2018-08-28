/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { Basic_infoFormComponent } from './basic_info-form.component';

let component: Basic_infoFormComponent;
let fixture: ComponentFixture<Basic_infoFormComponent>;

describe('basic_info-form component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ Basic_infoFormComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(Basic_infoFormComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});