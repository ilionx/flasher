import {Component} from '@angular/core';
import {Flashlight} from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(flashlight: Flashlight) {
    flashlight.switchOn();
  }

}
