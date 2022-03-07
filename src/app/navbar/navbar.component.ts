import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('popstate', () => {
      location()
    })
    let location = () => {
      let l = window.location.href;
      if (l.includes('home')) {
        console.log('home');
        this.active(document.querySelector('#home'))
      } else if (l.includes('products')) {

        this.active(document.querySelector('#pro'))
        console.log('product');

      }
    }

    location()
  }




  active(e: any) {
    let arr = document.querySelectorAll('li')
    arr.forEach(el => {
      el.classList.remove('active')
    });
    e.classList.add('active')
  }

}
