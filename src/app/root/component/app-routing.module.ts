import {importProvidersFrom, NgModule} from '@angular/core';
import {provideRouter, RouterModule, Routes, withComponentInputBinding} from '@angular/router';
import {DashboardGuard} from "../../dashboard/dashboard.guard";
import {AppNode} from "../../shared/route/enum/route.enum";
import {HttpClientModule} from "@angular/common/http";

export const routes: Routes =  [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('../../security/security.routes').then(r => r.securityRoutes)
  },
  {
    path: AppNode.AUTHENTICATED,
    canActivate: [DashboardGuard()],
    loadChildren: () => import('../../dashboard/dashboard.routes').then(r => r.DashboardRoutes)
  },
  {
    path: AppNode.FALL_BACK,
    loadComponent: () => import('../../shared/routes/global-fall-back-page/global-fall-back-page.component').then(r => r.GlobalFallBackPageComponent)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes
    , withComponentInputBinding()),importProvidersFrom(HttpClientModule)],
})
export class AppRoutingModule { }
