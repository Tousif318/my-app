import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  accounts:any = [];

  constructor(private _accountService:AccountService){
    _accountService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  term:string = "";

  filter(){
    this._accountService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
      this.accounts = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  column:string = "";
  order:string = "";

  sort(){
    this._accountService.getSortedAccounts(this.column, this.order).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  delete(id:string){
    this._accountService.deleteaccount(id).subscribe(
      (data:any)=>{
        alert("Deleted sucessfully!!");
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  limit:number = 0;
page:number= 0;

pagination(){
  this._accountService.getPagedAccounts(this.limit,this.page).subscribe(
    (data:any)=>{
      this.accounts = data;
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
}

}
