import { AF } from './../providers/af';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewChecked {

  public newMessage: string;
  public messages: AngularFireList<any>;

  constructor(public afService: AF) {
    this.messages = this.afService.messages;
    console.log(this.messages);
  }

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { console.log('Scroll to bottom failed yo!'); }
  }

  // I forgot to add this but thanks for letting me know in the comments so I could update it!
  sendMessage() {
    this.afService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

  ngOnInit() { }

  isYou(email) {
    if (email === this.afService.email) {
      return true;
    } else {
      return false;
    }
  }

  isMe(email) {
    if (email === this.afService.email) {
      return false;
    } else {
      return true;
    }
  }
}
