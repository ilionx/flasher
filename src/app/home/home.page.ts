import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';
import {Flashlight} from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  howManyTimes = new FormControl(5);
  howLong = new FormControl(500);
  on = false;

  constructor(private flashlight: Flashlight) {
  }

  onStart() {
    interval(this.howLong.value).pipe(
      take(this.howManyTimes.value * 2)
    ).subscribe(() => {
      this.on = !this.on;
      this.flashlight.toggle();
    });
  }
}
