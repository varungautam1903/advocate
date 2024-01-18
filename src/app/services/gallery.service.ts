import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  url: string = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getAllImages() {
    return this.http.get(this.url);
  }

  uploadImage(file: any) {
    // Create form data 
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("caption", "Test");
    formData.append("image", file, file.name);

    // Make http post request over api 
    // with formData as req 
    return this.http.post(`${this.url}/upload`, formData)
  }

}
