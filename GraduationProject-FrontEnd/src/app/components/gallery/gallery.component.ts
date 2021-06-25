import { Photo } from './../../_models/photo';
import { GalleryService } from './../../services/gallery.service';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  @Input() carid: number;
  photos: Photo[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  responsiveOptions2: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  displayBasic: boolean;

  displayBasic2: boolean;

  displayCustom: boolean;

  activeIndex: number = 0;

  constructor(private galleryServ: GalleryService, private ac: ActivatedRoute) {
    this.displayBasic = false;
    this.displayBasic2 = false;
    this.displayCustom = false;
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }

  async ngOnInit(){
    console.log(this.carid);
    await this.galleryServ.getImages(this.carid).subscribe((a)=>{
      this.photos = a;
    })
  }
}
