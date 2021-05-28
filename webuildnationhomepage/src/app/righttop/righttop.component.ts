import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-righttop',
  templateUrl: './righttop.component.html',
  styleUrls: ['./righttop.component.scss']
})
export class RighttopComponent implements OnInit {
  img: any;
  constructor(private abc: AppService) { 
    this.img = []
  }

  ngOnInit(): void {
    this.img = this.abc.getImages()
  }

}
