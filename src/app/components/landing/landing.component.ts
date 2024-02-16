import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
