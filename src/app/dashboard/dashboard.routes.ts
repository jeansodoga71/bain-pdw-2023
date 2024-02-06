import {Routes} from "@angular/router";
import {AppRoutes} from "../shared/route/enum/route.enum";

export const DashboardRoutes: Routes = [{
  path: '',
  loadComponent: () => import('./router/dashboard-router/dashboard-router.component')
    .then(c => c.DashboardRouterComponent),
  children: [
    {
      path: '',
      loadComponent: () => import('./home/page/dashboard-home-page/dashboard-home-page.component')
        .then(c => c.DashboardHomePageComponent),
    },
    // {
    //   path: 'member/detail/:id',
    //   loadComponent: () => import('./feature/member/page/member-detail-page/member-detail-page.component')
    //     .then(c => c.MemberDetailPageComponent)
    // },
    // {
    //   path: 'member',
    //   loadChildren: () => import('./feature/member/member.routes')
    //     .then(r => r.memberRoutes)
    // }
    {
      path: 'profil',
      loadComponent: () => import('./feature/profil/profil.component')
        .then(c => c.ProfilComponent)
    }
  ]
}

]
export class DashboardRouterComponent {
  routes = AppRoutes;
}

