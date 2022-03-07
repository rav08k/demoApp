import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: FormGroup;
  submitted = false;
  image: any = null
  list: any = []
  status = true;

  constructor(
    private fb: FormBuilder,
  ) {
    this.product = this.fb.group({
      pname: ['', Validators.required],
      price: ['', [Validators.required]],
      desc: [''],
      img: [''],

    })
  }

  ngOnInit(): void {
    this.getItem()
  }

  changeImgName(e: any) {
    this.status = false;
    console.log(e.files[0]);

    let el: any = document.querySelector('#input')
    let path = this.product.value.img
    let image: any

    path = path.slice(12,)
    el.innerHTML = (path)
    if (e.files && e.files[0]) {
      var reader = new FileReader();

      // reader.onload = function (v: any) {
      //   image = v.target.result;
      //   im()
      // }
      reader.onload = ((v) => {
        console.log(v.target?.result);
        console.log(this.product.value);
        this.product.value.img = v.target?.result;
        this.status = true;
      })

      function im() {
        console.log('hii');

      }
      reader.readAsDataURL(e.files[0]);
    }

    // console.log(path);

  }

  addProduct() {
    this.submitted = true;
    console.log(this.product);

    if (this.product.valid) {
      let el: any = document.querySelector('#input')
      localStorage.setItem(`listItem${this.list.length}`, JSON.stringify(this.product.value))
      this.product.reset()
      el.innerHTML = ('Choose file...')

      this.submitted = false
    }
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

  remove(i: any) {
    console.log(i);
    this.list.splice(i, 1)
    localStorage.removeItem(`listItem${i}`)
    this.resetList()

  }
  resetList() {
    localStorage.clear()
    for (let i = 0; i < this.list.length; i++) {
      localStorage.setItem(`listItem${i}`, JSON.stringify(this.list[i]))

    }
  }

}
