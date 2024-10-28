import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProfileData } from '../models/profile-data.model';

@Component({
  selector: 'app-theform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './theform.component.html',
  styleUrl: './theform.component.css'
})
export class TheformComponent implements OnInit {
  profileForm!: FormGroup;

  @Output() dataSubmitted = new EventEmitter<ProfileData>();

  constructor(private formbuilder: FormBuilder){};

  ngOnInit() {
    this.profileForm = this.formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    this.dataSubmitted.emit({
      firstname: this.profileForm.value.firstname,
      lastname: this.profileForm.value.lastname,
      email: this.profileForm.value.email
    })
  }
}
