import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  user: User;

  lat = 52.2297700;
  lng = 21.0117800;
  zoom = 12;

  constructor() { }

  ngOnInit() {
  }

}
