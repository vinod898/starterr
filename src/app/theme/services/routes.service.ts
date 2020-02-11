import { Injectable } from '@angular/core';
import { AuthComponent } from '../layout/auth/auth.component';
import { AdminComponent } from '../layout/admin/admin.component';
import { JobsModule } from '../pages/jobs/jobs.module';
import { PostModule } from '../pages/post/post.module';
import { AuthModule } from '../pages/auth/auth.module';
import { ApplyPostModule } from '../pages/apply-post/apply-post.module';
import { ProfileModule } from '../pages/profile/profile.module';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor() { }
  getRoutes() {
    return [{
      path: '',
      component: AuthComponent,
      children: [
        {
          path: '',
          redirectTo: '/jobs',
          pathMatch: 'full',
          data: { breadcrumb: 'Jobs ' }
        },
        {
          path: 'jobs',
          loadChildren: () => JobsModule,
          data: { breadcrumb: 'Jobs ' }
        },
        {
          path: 'auth',
          loadChildren: () => AuthModule,
          data: { breadcrumb: 'auth ' }
        }, {
          path: 'apply',
          loadChildren: () => ApplyPostModule,
          data: { breadcrumb: 'auth ' }
        },
        {
          path: 'post',
          loadChildren: () => PostModule,
          data: { breadcrumb: 'Posts ' }
        },
        {
          path: 'profile',
          loadChildren: () => ProfileModule,
          data: { breadcrumb: 'profile ' }
        }
      ]
    }, {
      path: '',
      component: AdminComponent,
      children: []
    }]
  }
}
