import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply-post',
  templateUrl: './apply-post.component.html',
  styleUrls: ['./apply-post.component.scss']
})
export class ApplyPostComponent implements OnInit {

  public title = 'NA';
  public companyName = 'NA';
  public logo = 'NA';
  public location = 'NA';
  public experiance = 'NA';
  public salary = 'NA';
  public address = 'NA';
  public jobDesc = 'NA'
  public post;

  constructor(public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {

      this.post = JSON.parse(params['post']);
      console.log(this.post)
    });
  }

  ngOnInit() {


    this.title =this.post.title;
    this.experiance = this.post.experiance;
    this.salary = this.post.salary;
    this.address = this.post.details.address;
    this.location = this.post.details.city;
    this.logo = this.post.details.companyLogo;
    this.companyName = this.post.details.name;
    this.jobDesc = this.post.jobDescription
  }

}
