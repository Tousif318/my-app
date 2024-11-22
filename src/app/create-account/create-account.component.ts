import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  constructor(private _accountservice:AccountService){}
  public accountform:FormGroup = new FormGroup(
    {
      account_name: new FormControl(),
      available_balance: new FormControl(),
      account_number: new FormControl(),
      city: new FormControl(),
      profile_picture: new FormControl(),

    },
  );

  Submit(){
    console.log(this.accountform);
    this._accountservice.createaccount(this.accountform.value).subscribe(
      (data:any)=>{
        alert("Create Sucessfully!!!");
      },
      (err:any)=>{
        alert("creation Failed");
      }
    )
  }
}
