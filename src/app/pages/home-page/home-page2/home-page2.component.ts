import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page2',
  templateUrl: './home-page2.component.html',
  styleUrls: ['./home-page2.component.scss']
})
export class HomePage2Component implements OnInit {

  id:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('homePageId');
  }

}
