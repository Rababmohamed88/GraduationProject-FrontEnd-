import { Photo } from './../_models/photo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  getImages(carDetailsId: number) {
    return this.http.get<Photo[]>(
      'https://localhost:44301/api/Cars/photos/' + carDetailsId
    );
  }
}
