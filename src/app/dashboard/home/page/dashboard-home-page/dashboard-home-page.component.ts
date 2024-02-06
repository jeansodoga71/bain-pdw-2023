import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentActivityComponent } from 'app/dashboard/layout/recent-activity/recent-activity.component';
import { YourPageComponent } from 'app/dashboard/layout/your-page/your-page.component';

@Component({
  selector: 'app-dashboard-home-page',
  standalone: true,
  imports: [CommonModule, RecentActivityComponent, YourPageComponent],
  templateUrl: './dashboard-home-page.component.html',
  styleUrls: ['./dashboard-home-page.component.scss']
})
export class DashboardHomePageComponent {

  constructor() {
    
  }

}
