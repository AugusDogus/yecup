import { Component } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'speed-test.page.html',
  styleUrls: ['speed-test.page.scss']
})
export class SpeedTestPage {

  constructor(private network: Network) {}

  public startTest() {
    this.checkWifi();
  }

  checkWifi() {

// watch network for a connection

    this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);
    });
  }

}
