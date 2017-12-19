import { Component, OnInit } from '@angular/core';
import { Chat } from '../chat';
import { Message } from '../message';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [FirebaseService]
})
export class ChatComponent implements OnInit {

  constructor(public fb: FirebaseService) {

    // set up firestore for chat as a document userId/chats/chatId

    // set up firestore for messages as a collection userId/chats/chatId/messages
   }

  ngOnInit() {
  }

  pushMessage (message, sentBy) {
      // push a message to the messages collection
  }

  }
