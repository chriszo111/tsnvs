import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import 'rxjs/Rx';

interface Message {
  date: String,
  text: String
}

@Component({
  templateUrl: 'message-list.component.html'
})
export class MessageListComponent implements OnInit{
  messages: Array<Message> [];

  constructor(private oktaAuth: OktaAuthService, private http: HttpClient) {
    this.messages = [];
  }

  async ngOnInit() {
    const accessToken = await this.oktaAuth.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + accessToken
    });
    // Make request
    this.http.get(
      'http://localhost:4200/api/messages', { headers: headers })
      .subscribe((messages: Array<Message>) => messages.forEach(message => console.log(message)));
  }
}
