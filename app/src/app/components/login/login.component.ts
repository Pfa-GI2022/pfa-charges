import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private elementRef: ElementRef,
    private formBuilder: FormBuilder,
    private auhService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Zs]*'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Zs]*'),
      ]),
    });
  }

  onSubmit() {
    this.auhService.login(this.loginForm.value).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.authenticateUser(this.roles);
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  authenticateUser(userRoles: string[]) {
    if (userRoles.includes('admin')) {
      this.router.navigate(['/admin/users']);
    } else if (userRoles.includes('chefDeDepartement')) {
      this.router.navigate(['/departement']);
    } else if (userRoles.includes('chefDeFiliere')) {
      this.router.navigate(['/filiere/modules']);
    } else {
      this.router.navigate(['/']);
    }
  }

  ngAfterViewInit() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../../../assets/js/login.js';
    this.elementRef.nativeElement.appendChild(s);
  }
  reloadPage(): void {
    window.location.reload();
  }
}
