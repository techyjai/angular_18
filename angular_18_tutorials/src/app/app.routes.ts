import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive/attribute-directive.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir/structural-dir.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { IfelseComponent } from './components/control-flow/ifelse/ifelse.component';
import { ForComponent } from './components/control-flow/for/for.component';
import { PipesComponent } from './components/pipes/pipes/pipes.component';
import { TemplateFormComponent } from './components/forms/template/template-form/template-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from './components/forms/reactive/reactive/reactive.component';
import { GetAPIComponent } from './components/apiIntegration/get-api/get-api/get-api.component';
import { PostAPIComponent } from './components/apiIntegration/post-api/post-api/post-api.component';
import { LifecycleEventComponent } from './components/lifecycle-event/lifecycle-event.component';
import { NgTemplateComponent } from './components/directive/ng-template/ng-template.component';

export const routes: Routes = [
    {
        path:'add-emp' , component:AddEmployeeComponent
    },
    {
        path:'data-bind' , component:DataBindingComponent
    },
    {
        path:'lifecycle-event' , component:LifecycleEventComponent
    },
    {
        path:'attr-dir' , component:AttributeDirectiveComponent
    },
    {
        path:'ng-template' , component:NgTemplateComponent
    },
    {
        path:'structural-dir' , component:StructuralDirComponent
    },
    {
        path:'emp-List' , component:EmployeeListComponent
    },
    {
        path:'ifelse' , component:IfelseComponent
    },
    {
        path:'for' , component:ForComponent
    },
    {
        path:'pipe' , component:PipesComponent
    },
    {
        path:'template' , component:TemplateFormComponent
    },
    {
        path:'reactive' , component:ReactiveComponent
    },
    {
        path:'get' , component: GetAPIComponent
    },
    {
        path:'post' , component:PostAPIComponent
    },
];
