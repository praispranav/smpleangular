import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  imgList: any;

  constructor() { 
    this.imgList = [
      {
        src: "assets/img1.jpg",
        text: "sample Text"
      },
      {
        src: "assets/img2.jpg",
        text: "sample Text"
      },
      {
        src: "assets/img3.jpg",
        text: "sample Text"
      },
      {
        src: "assets/img1.jpg",
        text: "sample Text"
      },
      {
        src: "assets/img2.jpg",
        text: "sample Text"
      },
      {
        src: "assets/img3.jpg",
        text: "sample Text"
      },
      {
        src: "assets/img1.jpg",
        text: "sample Text"
      },
      {
        src: "assets/img2.jpg",
        text: "sample Text"
      },
      {
        src: "assets/img3.jpg",
        text: "sample Text"
      },
      {
        src: "assets/img1.jpg",
        text: "sample Text"
      },
      {
        src: "assets/img2.jpg",
        text: "sample Text"
      },
      {
        src: "assets/img3.jpg",
        text: "sample Text"
      }
    ]
  }

  getImages(){
    return this.imgList
  }
}
