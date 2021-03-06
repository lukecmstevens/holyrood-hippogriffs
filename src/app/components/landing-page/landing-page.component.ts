import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CarouselService } from 'src/app/services/carousel.service';
import { CarouselImage } from 'src/app/domain/data-definitions';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  images: CarouselImage[];

  constructor(
    private router: Router,
    private carouselService: CarouselService
    ) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });

    this.images = this.carouselService.getCarouselImages();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.images = this.carouselService.getCarouselImages();
  }

}
