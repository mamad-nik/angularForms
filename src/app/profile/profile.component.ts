import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ProfileData } from '../models/profile-data.model';
import { ProfileService } from '../profile-service.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  info!: ProfileData;
  disabled = true;

  constructor(private profileService: ProfileService){};

  ngOnInit(): void {
    this.profileService.currentProfileData.subscribe((data) => {
      if (data) {
        this.info = data
        this.disabled = false
      }  
    })
  }
}
