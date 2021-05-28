import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-lefttop',
  templateUrl: './lefttop.component.html',
  styleUrls: ['./lefttop.component.scss']
})
export class LefttopComponent implements OnInit {

  img: any;
  constructor(private abc:AppService) { 
    this.img = "any"
  }

  ngOnInit(): void {
    this.img = this.abc.getImages()[0].src
    console.log(this.img)
  }

}
