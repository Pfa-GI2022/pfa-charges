import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validator,
  Validators,
  FormArray,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  alert = false;
  UserForm: FormGroup;
  Roles = ['admin', 'professeur', 'chefDeDepartement', 'chefDeFiliere'];
  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.UserForm = this.formBuilder.group({
      Username: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('[a-zA-Zs]*'),
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('[a-zA-Z0-9._%+-s]*'),
      ]),
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
    });
  }

  onSubmit() {
    console.log(this.UserForm.value);
    this.UserService.createUser(this.UserForm.value).subscribe((response) => {
      console.log(response);
      this.UserForm.reset({});
      this.alert = true;
    });
  }

  closeAlert() {
    this.alert = false;
  }
}
