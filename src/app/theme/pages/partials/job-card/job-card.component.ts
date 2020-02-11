import { Component, OnInit, Input } from '@angular/core';
import { Posts } from './../../../domain/Posts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  @Input() post: Posts;
  @Input() width;
  @Input() bookmarked;
  private title: string;
  private experiance: number;
  private salary: number;
  private address: string;
  private location: string;
  private logo: string;
  private companyName: string;
  private noOfDays; number;
  public joiningDate;
  public timings;
  public showsaved = false;
  public save = true;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.title = this.post.title;
    this.experiance = this.post.experiance;
    this.salary = this.post.salary;
    this.address = this.post.details.address;
    this.location = this.post.details.city;
    this.logo = this.post.details.companyLogo;
    this.companyName = this.post.details.name;
    this.noOfDays = this.getDays(this.post.joiningDate);
    this.joiningDate = this.post.joiningDate;
    this.timings = this.post.jobTimings;
    this.checkBookmarked();
  }

  getDays(joiningDate: number) {
    let diff = Math.abs(joiningDate - new Date().getTime());
    return Math.ceil(diff / (1000 * 3600 * 24));
  }

  checkBookmarked() {
    if (this.bookmarked == true) {
      this.showsaved = true;
      this.save = false;
    }
  }

  view() {
    this.router.navigate(['/apply', JSON.stringify(this.post)])
  }
  saveJob(company) {
    this.showsaved = true;
    this.save = false;
  }

  unsaveJob(company) {
    this.showsaved = false;
    this.save = true;
  }

}
