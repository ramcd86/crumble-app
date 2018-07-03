// import { Component } from '@angular/core';
// // import { AuthenticationService, TokenPayload } from '../_services/authentication.service';
// import { Router } from '@angular/router';
// import {HttpServiceCore} from '../_services/http/HttpServiceCore.service';
// import {ITokenPayload} from '../_interfaces/IUserAuth';
//
// @Component({
//   templateUrl: './login.component.html'
// })
// export class LoginComponent {
//   credentials: ITokenPayload = {
//     email: '',
//     password: ''
//   };
//
//   constructor(private auth: HttpServiceCore, private router: Router) {}
//
//
//   login() {
//     this.auth.login(this.credentials).subscribe(() => {
//       this.router.navigateByUrl('/');
//     }, (err) => {
//       console.error(err);
//     });
//   }
// }
