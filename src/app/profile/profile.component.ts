import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { ProfileData } from '../models/profile-data.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges {
  @Input() info: ProfileData;
  disabled = true;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['info'] && changes['info'] != undefined) {
      this.disabled = false;
    }
  }
}
