import { Component, OnInit } from '@angular/core';
import {OktaAuthService} from "@okta/okta-angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-player',
  templateUrl: 'player.component.html',
  styles: []
})
export class PlayerComponent implements OnInit {
  steamApiKey: string;
  steamAppId: number;

  constructor(private oktaAuth: OktaAuthService, private http: HttpClient) {
    this.steamApiKey = '5AFB253AA9901B345CA32DC91A2A640E';
    this.steamAppId = 730;
  }

  ngOnInit() {
    this.oktaAuth.getUser().then((user) => {
      user.steamId64
    })
  }

}
