import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";

const routes: Routes = [
    {
        path: '',
        component: AdminComponent
    }
];

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [
    ]
})
export class AdminModule { }