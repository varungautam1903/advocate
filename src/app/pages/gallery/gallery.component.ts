import { Component } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  loading: boolean = false; // Flag variable 
  file: any = [];

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.loadAllImages();
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  loadAllImages() {
    this.galleryService.getAllImages().subscribe(
      (res) => {
        console.log("result", res);
      },
      (err) => {
        console.log("Error", err);
      }
    );
  }

  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.galleryService.uploadImage(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          this.loading = false; // Flag variable  
        }
      }
    );
  }


}
