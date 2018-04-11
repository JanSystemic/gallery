import { GalleryImage } from './../models/galleryimage.model';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
  images: Observable<GalleryImage[]>;
  constructor(private ImageService: ImageService) { }

  ngOnInit() {
    this.images = this.ImageService.getImages();
  }

  ngOnChanges() {
    this.images = this.ImageService.getImages();
  }

}
