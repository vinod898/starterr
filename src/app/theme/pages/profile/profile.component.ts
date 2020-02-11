import { Component, OnInit, Input } from '@angular/core';
import { Posts } from '../../domain/Posts';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() post: Posts;

  public posts;
  public data;
  public globaldata;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.data = this.getDataFromURL();
    let subscription = this.data.subscribe(
      value => { this.posts = value; this.globaldata = value },
      error => { console.log(error) }
    );
  }

  getDataFromURL(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>("assets/data/bookmarked.json")
  }


}

