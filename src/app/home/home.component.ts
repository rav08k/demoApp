import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: any = []
  constructor() {

  }

  ngOnInit(): void {
    this.getItem()
  }
  getItem() {
    let i: any = Object.keys(localStorage)
    i = i.length
    let lst: any = [];
    for (let j = 0; j <= i; j++) {
      let item: any = localStorage.getItem(`listItem${j}`)
      // console.log(item);
      if (item != null) {

        lst.push(JSON.parse(item))
      }
    }
    this.list = lst;
  }
}
