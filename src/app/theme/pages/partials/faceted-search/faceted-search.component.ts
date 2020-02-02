import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-faceted-search',
  templateUrl: './faceted-search.component.html',
  styleUrls: ['./faceted-search.component.scss']
})
export class FacetedSearchComponent implements OnInit {

  @Output() filteredItems = new EventEmitter();

  filterObject = {}

  categoryList = [];
  selectedCategories = [];
  categorySettings = {};

  locationList = [];
  selectedLocations = [];
  locationSettings = {};

  constructor() { }

  ngOnInit() {

    this.setCategory();
    this.setLocation()

  }


  setCategory() {

    this.categoryList = [{ id: 1, itemName: 'Administrative Assistant' },
    { id: 2, itemName: 'Receptionist' },
    { id: 3, itemName: 'Office Manager' },
    { id: 4, itemName: 'Auditing Clerk' },
    { id: 5, itemName: 'Bookkeeper' },
    { id: 6, itemName: 'Account Executive' },
    { id: 7, itemName: 'Branch Manager' },
    { id: 8, itemName: 'Business Manager' },
    { id: 9, itemName: 'Quality Control Coordinator' },
    { id: 10, itemName: 'Administrative Manager' },
    { id: 11, itemName: 'Chief Executive Officer' },
    { id: 12, itemName: 'Business Analyst' },
    { id: 13, itemName: 'Risk Manager' },
    { id: 14, itemName: 'Human Resources' },
    { id: 15, itemName: 'Office Assistant' },
    { id: 16, itemName: 'Secretary' },
    { id: 17, itemName: 'Office Clerk' },
    { id: 18, itemName: 'File Clerk' },
    { id: 19, itemName: 'Account Collector' },
    { id: 20, itemName: 'Administrative Specialist' },
    { id: 21, itemName: 'Executive Assistant' },
    { id: 22, itemName: 'Program Administrator' },
    { id: 23, itemName: 'Program Manager' },
    { id: 24, itemName: 'Administrative Analyst' },
    { id: 25, itemName: 'Data Entry' }]

    this.categorySettings = {
      text: "Select Category",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      enableSearchFilter: true
    };

  }
  setLocation() {
    this.locationList = [{ id: 1, itemName: 'Farmington' },
    { id: 2, itemName: 'Bentonville' },
    { id: 3, itemName: 'Omaha' },
    { id: 4, itemName: 'Cupertino' },
    { id: 5, itemName: 'Irving' },
    { id: 6, itemName: 'San Francisco' },
    { id: 7, itemName: 'Minnetonka' },
    { id: 8, itemName: 'Woonsocket' },
    { id: 9, itemName: 'Detroit' },
    { id: 10, itemName: 'Dallas' },
    { id: 11, itemName: 'Dearborn' },
    { id: 12, itemName: 'Chesterbrook' },
    { id: 13, itemName: 'Seattle' },
    { id: 14, itemName: 'Boston' },
    { id: 15, itemName: 'New York' },
    { id: 16, itemName: 'Dublin' },
    { id: 17, itemName: 'Issaquah' },
    { id: 18, itemName: 'Deerfield' },
    { id: 19, itemName: 'Cincinnati' },
    { id: 20, itemName: 'San Ramon' },
    { id: 21, itemName: 'Washington' },
    { id: 22, itemName: 'New York' },
    { id: 23, itemName: 'St. Louis' },
    { id: 24, itemName: 'Atlanta' },
    { id: 25, itemName: 'Chicago' },
    { id: 26, itemName: 'San Francisco' },
    { id: 27, itemName: 'Charlotte' },
    { id: 28, itemName: 'Mountain View' },
    { id: 29, itemName: 'Redmond' },
    { id: 30, itemName: 'Indianapolis' },
    { id: 31, itemName: 'New York' },
    { id: 32, itemName: 'Philadelphia' },
    { id: 33, itemName: 'Armonk' },
    { id: 34, itemName: 'Bloomington' },
    { id: 35, itemName: 'Houston' },
    { id: 36, itemName: 'New Brunswick' },
    { id: 37, itemName: 'Cincinnati' },
    { id: 38, itemName: 'San Antonio' },
    { id: 39, itemName: 'Minneapolis' },
    { id: 40, itemName: 'McLean' },
    { id: 41, itemName: 'Mooresville' },
    { id: 42, itemName: 'Round Rock' },
    { id: 43, itemName: 'New York' },
    { id: 44, itemName: 'Hartford' },
    { id: 45, itemName: 'Purchase' },
    { id: 46, itemName: 'Chicago' },
    { id: 47, itemName: 'Atlanta' },
    { id: 48, itemName: 'Santa Clara' },
    { id: 49, itemName: 'Newark' },
    { id: 50, itemName: 'Boise' }]
      ;
    this.locationSettings = {
      text: "Select Location",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      enableSearchFilter: true
    };
  }



  onCategorySelect(item: any) {
    this.filterObject["category"] = this.getListFromItemList(this.selectedCategories);
    console.log(this.filterObject)
    this.filteredItems.emit(this.filterObject);


  }
  onCategoryDeSelect(item: any) {
    this.filterObject["category"] = this.getListFromItemList(this.selectedCategories);
    console.log(this.filterObject)
    this.filteredItems.emit(this.filterObject);


  }
  onCategorySelectAll(items: any) {
    this.filterObject["category"] = this.getListFromItemList(this.selectedCategories);
    console.log(this.filterObject)

    this.filteredItems.emit(this.filterObject);


  }
  onCategoryDeSelectAll(items: any) {
    this.selectedCategories = items;
    this.filterObject["category"] = this.getListFromItemList( this.selectedCategories);
    console.log(this.filterObject)
    this.filteredItems.emit(this.filterObject);


  }


  onLocationSelect(item: any) {
    this.filterObject["location"] = this.getListFromItemList(this.selectedLocations);
    console.log(this.filterObject)

    this.filteredItems.emit(this.filterObject);


  }
  onLocationDeSelect(item: any) {
    this.filterObject["location"] = this.getListFromItemList(this.selectedLocations);
    console.log(this.filterObject)

    this.filteredItems.emit(this.filterObject);


  }
  onLocationSelectAll(items: any) {
    this.filterObject["location"] = this.getListFromItemList(this.selectedLocations);
    console.log(this.filterObject)

    this.filteredItems.emit(this.filterObject);


  }
  
  onLocationDeSelectAll(items: any) {
    this.selectedLocations =  items;
    this.filterObject["location"] = this.getListFromItemList(this.selectedLocations);
    console.log(this.filterObject)

    this.filteredItems.emit(this.filterObject);


  }




  getListFromItemList(selectedItems: any) {
    let tempArray = []
    var i;
    for (i = 0; i < selectedItems.length; i++) {
      tempArray.push(selectedItems[i]["itemName"])
    }
    return tempArray;
  }


  filter() {
    this.filteredItems.emit(this.filterObject);

  }
}