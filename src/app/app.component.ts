import {Component, OnInit} from '@angular/core';
import {HttpServiceCore} from './_services/http/http-service-core.service';
import {SessionStorageService} from './_store/SessionStorage.service';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {


  public navStatus: boolean;
  public windowDesktop: boolean;
  public token = null;

  constructor(
    public http: HttpServiceCore,
    public session: SessionStorageService,
    public router: Router,
    public titleService: Title
  ) {
    this.token = this.http.getToken();
  }

  ngOnInit() {
    this.titleService.setTitle('Crumbs');
    if (this.token === null) {
      this.session.setUserPresent(false);
      this.router.navigateByUrl('/login');
    } else if (this.token === localStorage.getItem('mean-token')) {
      this.router.navigateByUrl('/home');
    }

    console.log(`
    ##################################################
    #################### WARNING #####################
    ##################################################
    #
    # THE CONSOLE IS A FEATURE INTENDED FOR DEVELOPERS.
    # IF SOMEONE HAS ASKED YOU TO GIVE THEM INFORMATION,
    # FROM THIS SCREEN THEN YOU ARE PUTTING YOUR ACCOUNT
    # AT RISK FROM HACKERS. DO NOT SHARE INFORMATION ON
    # THIS SCREEN WITH THIRD PARTIES.
    #
    # THE CRUMBLE TEAM TAKES NO RESPONSIBILITY FOR
    # INFORMATION YOU SHARE FROM THIS DATA SOURCE.
    #
    ##################################################
    #################### WARNING #####################
    ##################################################
    `);

    this.navStatus = false;
    if (window.innerWidth < 767) {
      this.windowDesktop = true;
    } else {
      this.windowDesktop = false;
    }

  }

  public logOut() {
    this.toggleNav();
    this.http.logout();
  }

  public toggleNav(): boolean {
    this.navStatus = !this.navStatus;
    return false;
  }


}
