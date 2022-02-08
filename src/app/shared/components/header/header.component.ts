import { Component, OnInit } from '@angular/core'
import { UserService } from 'src/app/core/services/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public user: UserService) {}

  ngOnInit(): void {}

  logout(): void {
    this.user.logout()
  }
}
