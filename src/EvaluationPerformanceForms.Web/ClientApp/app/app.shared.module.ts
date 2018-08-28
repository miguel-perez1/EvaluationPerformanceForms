import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { ExecuteFormComponent } from './components/execute-form/execute-form.component';
import { Step_planFormComponent } from './components/step_plan-form/step_plan-form.component';
import { LoginComponent } from './components/login/login.component';
import { FormViewComponent } from './components/formView/formView.component'
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { Basic_infoFormComponent } from './components/basic_info-form/basic_info-form.component';
import { ListViewComponent } from './components/listView/listView.component';
import { AppealFormComponent } from './components/appeal-form/appeal-form.component';
import { SignatureComponent } from './components/signature/signature.component';
import { ListViewAdminComponent } from './components/listViewAdmin/listViewAdmin.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ExecutiveFormData } from './data/executive-form.data';
import { ExecutiveFormService } from './services/executive-form.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        LoginComponent,
        ExecuteFormComponent,
        Step_planFormComponent,
        AppealFormComponent,
        FormViewComponent,
        HomeComponent,
        PerformanceComponent,
        ListViewComponent,
        ListViewAdminComponent,
        Basic_infoFormComponent,
        SignatureComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'executive/:id', component: ExecuteFormComponent },
            { path: 'performance', component: PerformanceComponent },
            { path: 'step', component: Step_planFormComponent },
            { path: 'appeal', component: AppealFormComponent },
            { path: 'login', component: LoginComponent },
            { path: 'forms', component: FormViewComponent },
            { path: 'listView', component: ListViewComponent },
            { path: 'listViewAdmin', component: ListViewAdminComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        InMemoryWebApiModule.forRoot(ExecutiveFormData),
    ],

    providers: [UserService, AuthguardGuard, ExecutiveFormService]

})
export class AppModuleShared {
}