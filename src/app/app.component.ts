import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetConversationService } from './get-conversation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChatGPT Conversation';

  conversation = null; 

  constructor(
    private route: ActivatedRoute,
    private getConversationService: GetConversationService
  ) {
    this.route.queryParams.subscribe(params => {
      let url = params['url'];
      if (url) {
        url = 'https://upcdn.io/FW25bBG/raw' + url;
        this.getConversationService.fetchFile(url).subscribe(content => {
          this.conversation = JSON.parse(content);
        });
      }
    });
  }

}
