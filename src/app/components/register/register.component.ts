import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { register } from 'module';
import { Router } from 'express';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavBarComponent, FormsModule, RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  register(formValue: any): void {
    console.log('Form Value:', formValue);
  }
  constructor(private router: Router) {}
}
