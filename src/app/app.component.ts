import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TheformComponent } from './theform/theform.component';
import { ProfileData } from './models/profile-data.model';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, TheformComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'title';
  showProfile(info: ProfileData){
    
  }
}
