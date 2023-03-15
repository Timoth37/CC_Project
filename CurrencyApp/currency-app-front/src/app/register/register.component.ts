import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiServices} from "../services/api.services";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  username!: string;
  password!: string;
  constructor(private router: Router, private api: ApiServices) {}

  async onSubmitForm(form: NgForm){
    await this.api.register(form.value);
    await this.router.navigateByUrl('/login');
  }
}

