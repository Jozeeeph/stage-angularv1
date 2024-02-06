import { Component, OnInit } from '@angular/core';
import { Event } from "../interface/event";
import { EventService } from '../services/event.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  events: Event[] = [];

  constructor(private eventService:EventService){}
  ngOnInit(): void {
    this.getEvents();
  }

  public getEvents(): void {
    this.eventService.getEvents().subscribe(
      (response: any) => {
        this.events = response;
        console.log(this.events);

      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}
