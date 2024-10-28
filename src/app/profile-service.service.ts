import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProfileData } from './models/profile-data.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profileDataSource = new BehaviorSubject<ProfileData | null>(null);
  currentProfileData = this.profileDataSource.asObservable();

  constructor() { }

  updateProfileData(data: ProfileData) {
    this.profileDataSource.next(data)
  }
}
