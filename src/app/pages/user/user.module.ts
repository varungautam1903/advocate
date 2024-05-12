import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { UserComponent } from "./user.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { UserDetailComponent } from "../user-detail/user-detail.component";

const routes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: ':id',
        component: UserDetailComponent
    }
];

@NgModule({
    declarations: [
        UserComponent,
        UserDetailComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [
    ]
})
export class UserModule { }