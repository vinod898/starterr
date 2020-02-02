import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public languages = ["html5", "css", "bootstrap"];
  public additional = [];
  public popular = ["front-end developer","python developer","devops"]

  constructor() { }

  ngOnInit() {
  }

}
