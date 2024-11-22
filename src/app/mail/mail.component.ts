import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  mail:any = [];
  constructor(private _mailservice:MailService){
    _mailservice.getmails().subscribe(
      (data:any)=>{
        this.mail = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

}
