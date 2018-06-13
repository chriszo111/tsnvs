import { Component, OnInit } from '@angular/core';
import {OktaAuthService} from "@okta/okta-angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-stock-market',
  templateUrl: 'stock-market.component.html',
  styles: []
})
export class StockMarketComponent implements OnInit {
  isAuthenticated: boolean;
  alphaVintageApiKey: string;
  cryptoStocksIntraday$: any;

  constructor(private oktaAuth: OktaAuthService, private http: HttpClient) {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );

    // alphaVintage API key
    this.alphaVintageApiKey = 'WOJX599DDG5VUN77';
  }

  async ngOnInit() {
    // When component is used, call cryptomarket stocks
    this.cryptoStocksIntraday$ = await this.http.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=BTC&market=EUR&apikey=WOJX599DDG5VUN77').toPromise();
  }

}
