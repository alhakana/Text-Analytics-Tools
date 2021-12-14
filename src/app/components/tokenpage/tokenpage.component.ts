import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tokenpage',
  templateUrl: './tokenpage.component.html',
  styleUrls: ['./tokenpage.component.css']
})
export class TokenpageComponent implements OnInit {

  token: string | undefined

  constructor() { }

  ngOnInit(): void {
    console.log("Token: " + '725f6f7166aa4a01a3805e5d61049dee')
  }

  changeToken(): void {
    this.token = (<HTMLInputElement>document.getElementById("token")).value;
    localStorage.setItem("token", this.token);

  }
  checkToken(): void {
    alert(localStorage.getItem("token"))
  }

}
