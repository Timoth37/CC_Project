import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ApiServices} from "../services/api.services";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  constructor(private router: Router, private api: ApiServices, private cookieService: CookieService) {
  }

  ngOnInit(): void {}

  async onSubmitForm(form: NgForm){
    let token = this.api.login(form.value)
    token.then(value => {
      this.cookieService.set('jwt', value.jwt)
      localStorage.setItem('xsrfToken', value.xsrfToken)
      this.router.navigateByUrl('/');
    })
  }

}
