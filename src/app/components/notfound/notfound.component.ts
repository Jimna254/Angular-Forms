import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css',
})
export class NotfoundComponent {}
