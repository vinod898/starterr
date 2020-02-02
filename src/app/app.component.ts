import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesService } from './theme/services/routes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public routeService: RoutesService, public router: Router) {
    this.router.resetConfig(this.routeService.getRoutes());
  }
}
