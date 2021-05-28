import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-rightbottom',
  templateUrl: './rightbottom.component.html',
  styleUrls: ['./rightbottom.component.scss']
})
export class RightbottomComponent implements OnInit {
  img: any
  constructor(private abc: AppService) {
    this.img = []
   }

  ngOnInit(): void {
    this.img = this.abc.getImages()
  }

}
