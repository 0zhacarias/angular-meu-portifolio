import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['Hello', 'World'],
      typeSpeed: 50,
      loop: true
    };

    const typed = new Typed('#typed', options);
  }

}
