import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProfileData } from '../models/profile-data.model';
import { ProfileService } from '../profile-service.service';

@Component({
  selector: 'app-theform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './theform.component.html',
  styleUrl: './theform.component.css'
})
export class TheformComponent implements OnInit {
  profileForm!: FormGroup;
  submited = false;
  constructor(private formbuilder: FormBuilder, private profileService: ProfileService){};

  ngOnInit() {
    this.profileForm = this.formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    const profileData: ProfileData = {
      firstname: this.profileForm.value.firstname,
      lastname: this.profileForm.value.lastname,
      email: this.profileForm.value.email
    }
    this.profileService.updateProfileData(profileData);
    this.submited = true;
  }
}
