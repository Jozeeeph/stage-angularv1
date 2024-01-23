import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  contactForm!:FormGroup
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.contactForm=this.fb.group(
      {
        name:['',Validators.required],
        email:['',[Validators.email,Validators.required]],
        phone:[,[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
        message:['',Validators.required],
        source:[''],
      }
    )
  }

  get name(){
    return this.contactForm.get('name');
  }
  get email(){
    return this.contactForm.get('email');
  }
  get phone(){
    return this.contactForm.get('phone');
  }
  get message(){
    return this.contactForm.get('message');
  }

}