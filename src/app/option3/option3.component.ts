import { Component, OnInit } from '@angular/core';
import { AcctService } from '../services/acct/acct.service';

@Component({
  selector: 'app-option3',
  templateUrl: './option3.component.html',
  styleUrls: ['./option3.component.css']
})
export class Option3Component implements OnInit {


  username = this.acctService.username;
  constructor(private acctService: AcctService) { }

  ngOnInit() {
  }

  isLoggedIn():boolean {
  	return this.acctService.isLoggedIn();
  }

}
