import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  user:any = {};

  constructor(public auth:AuthService) {auth.userProfile$.source.subscribe(data=>this.user = data)}

  ngOnInit(): void {
  }

}
