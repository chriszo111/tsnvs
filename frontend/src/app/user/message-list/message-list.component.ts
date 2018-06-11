import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { OktaAuthService } from '@okta/okta-angular';
import 'rxjs/Rx';

interface Message {
  date: String,
  text: String
}

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages: Array<Message> [];



  constructor(private oktaAuth: OktaAuthService, private http: Http) {
    this.messages = [];
  }

  async ngOnInit() {
    const accessToken = await this.oktaAuth.getAccessToken();
    const headers = new Headers({
      Authorization: 'Bearer ' + accessToken
    });
    // Make request
    this.http.get(
      'http://localhost:3000/api/messages',
      new RequestOptions({ headers: headers })
    )
      .map(res => res.json())
      .subscribe((messages: Array<Message>) => messages.forEach(message => this.messages.push(message)));
  }

}
