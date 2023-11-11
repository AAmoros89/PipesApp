import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'agustin';
  public nameUpper: string = 'AGUSTIN';
  public fullName: string = 'aGusTin aMoRos';

  public customDate: Date = new Date();

}
