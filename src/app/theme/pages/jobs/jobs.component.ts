import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Posts } from '../../domain/Posts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  private data: Observable<Array<Posts>>;
  private globaldata: Array<Posts>;
  private posts: Array<Posts>;
  public searchToggle= false;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.data = this.getDataFromURL();
    let subscription = this.data.subscribe(
      value => { this.posts = value ; this.globaldata = value },
      error => { console.log(error) }
    );
  }


  getDataFromURL(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>("assets/data/post_list_new.json")
  }


  filter(event) {
    this.posts  = this.globaldata;
    this.searchToggle = true;
    let categoryFilter: Array<String> = event['category'] && event['category'] != null && event['category'] != undefined ? event['category'] : [];
    let locationFilter: Array<String> = event['location'] && event['location'] != null && event['location'] != undefined ? event['location'] : [];
    let filteredResult: Posts[] = []
    if (categoryFilter.length > 0 && locationFilter.length > 0) {
      filteredResult = this.posts.filter(
        post => {
          if (categoryFilter.includes(post['title']) && locationFilter.includes(post['details']['city'])) {
            return post;
          }
        });
    } else if (categoryFilter.length > 0 && locationFilter.length == 0) {
      filteredResult = this.posts.filter(
        post => {
          if (categoryFilter.includes(post['title'])) {
            return post;
          }
        });
    }
    else if (categoryFilter.length == 0 && locationFilter.length > 0) {
      filteredResult = this.posts.filter(
        post => {
          if (locationFilter.includes(post['details']['city'])) {
            return post;
          }
        });
    }
    else {
      
      filteredResult = this.posts;
      this.searchToggle = false;

    }
    this.posts = filteredResult
    console.log(filteredResult)

  }
}
