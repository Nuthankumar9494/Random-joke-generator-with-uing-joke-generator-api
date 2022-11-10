import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, observable, Observable, Subscription } from 'rxjs';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-quote-generator',
  templateUrl: './quote-generator.component.html',
  styleUrls: ['./quote-generator.component.css']
})
export class QuoteGeneratorComponent implements OnInit ,OnDestroy {
  data:any;
  isloading=true;
  constructor(private service:ServicesService) { }
 internalsub=Subscription;
  ngOnInit(): void {
    this.getjoke();
  //   let customObservable=Observable.create((observer:any)=>{
  //     let count=0;
  //     setInterval(()=>{
  //       observer.next(count);
  //       count++;
  //     },2000)
  //   })
  // this.internalsub=customObservable.subscribe((data:any)=>{
  // console.log(data)
  // })
    
  }
  getjoke(){
    setTimeout(() => {
      this.service.getdata().subscribe((joke)=>{
        this.data=joke;
        this.isloading=false;
       })
    }, 1000);
    
   
  }
  ngOnDestroy(){
    this.internalsub
  }
 
}
