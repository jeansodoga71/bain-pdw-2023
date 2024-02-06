import {Component, inject} from '@angular/core';
import {ApiService} from "@api";

@Component({
  selector: 'app-root',
  // standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';
  private readonly api: ApiService = inject(ApiService);

  ngOnInit(): void {
    // this.api.get('').subscribe((data) => {
      
    // })
    
  }


}