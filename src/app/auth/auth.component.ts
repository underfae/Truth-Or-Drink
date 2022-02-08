import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(protected router: Router) {}

  playGame(): void {
    this.router.navigateByUrl('/config')
  }
}
