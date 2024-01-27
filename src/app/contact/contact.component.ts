import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactServiceService } from '../services/contact-service.service';
import { Contact } from '../interface/contact';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  contactForm!:FormGroup
  constructor(private fb:FormBuilder,private contactService:ContactServiceService){}
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

  onsubmit(){
    const formData=this.contactForm.value;
   // console.log(formData);
    this.onAddContact();
    
  }

  onAddContact():void{
    console.log(this.contactForm.value);
    
    this.contactService.addContact(this.contactForm.value).subscribe(
      (response)=>{
        console.log(response);
        console.log("done");
        
      },
      (error : HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }



}
