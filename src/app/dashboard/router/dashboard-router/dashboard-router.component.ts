import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutes} from "../../../shared/route/enum/route.enum";
import { HeaderComponent } from 'app/dashboard/layout/header/header.component';

@Component({
  selector: 'app-dashboard-router',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HeaderComponent],
  templateUrl: './dashboard-router.component.html',
  styleUrls: ['./dashboard-router.component.scss']
})
export class DashboardRouterComponent implements OnInit {

  protected readonly routes = AppRoutes;

  ngOnInit() {

  }

}
