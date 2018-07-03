// import { Component } from '@angular/core';
// // import { AuthenticationService, ITokenPayload } from '../_services/authentication.service';
// import { Router } from '@angular/router';
// import {HttpServiceCore} from '../_services/http/HttpServiceCore.service';
// import {ITokenPayload} from '../_interfaces/IUserAuth';
//
// @Component({
//   templateUrl: './register.component.html'
// })
// export class RegisterComponent {
//   credentials: ITokenPayload = {
//     email: '',
//     name: '',
//     password: '',
//     dataId: 0
//   };
//
//   constructor(private auth: HttpServiceCore, private router: Router) {}
//
//   register() {
//     this.auth.register(this.credentials).subscribe(() => {
//       this.router.navigateByUrl('/profile');
//     }, (err) => {
//       console.error(err);
//     });
//   }
// }
