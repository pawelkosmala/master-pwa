import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { Restaurant } from 'src/app/interfaces/restaurant.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeoPoint } from 'src/app/interfaces/geopoint.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // Default coordinates, points to Warsaw
  @Input() coordinates: GeoPoint = {
    latitude: 52.2297700,
    longitude: 21.0117800
  };

  // Map zoom level
  @Input() zoom = 11;

  //Should be an observable
  user: User;

  restaurants$: Observable<Restaurant[]>;
  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.getRestaurants();
    this.restaurants$.subscribe(_ => { }, error => console.log(error));
  }

  getRestaurants() {
    this.restaurants$ = this.angularFirestore.collection('restaurants').valueChanges();
  }

  // Should handle closing previuos info windows when user clicks another
  onMapClick() {

  }
}
