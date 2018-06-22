import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OktaAuthService} from "@okta/okta-angular";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-stats-csgo',
  templateUrl: 'csgo.component.html',
  styles: []
})
export class CsgoComponent implements OnInit {
  steamApiKey: string;
  steamAppId: number;

  constructor(private oktaAuth: OktaAuthService, private http: HttpClient) {
    // Basic steam API config
    this.steamApiKey = '5AFB253AA9901B345CA32DC91A2A640E';
    this.steamAppId = 730;
  }

  ngOnInit() {
    // Check if user account is connected with steam
  }

}
