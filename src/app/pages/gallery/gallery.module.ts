import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { GalleryComponent } from "./gallery.component";

const routes: Routes = [
    {
        path: '',
        component: GalleryComponent
    }
];

@NgModule({
    declarations: [
        GalleryComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [
    ]
})
export class GalleryModule { }