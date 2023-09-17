import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { CasesComponent } from "./cases.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
        path: '',
        component: CasesComponent
    }
];

@NgModule({
    declarations: [
        CasesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [
    ]
})
export class CasesModule { }