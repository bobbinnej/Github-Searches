import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any): unknown {
    let today: any = new Date();
    let timeCounter: string = "";
    
    var difference = Math.abs(value - today) / 1000;
    var dayPass       = Math.floor(difference / 86400);

    if(dayPass > 0){
      timeCounter   += Math.floor(dayPass) +" days ";
    }
    difference    -= dayPass * 86400;
    var hours      = Math.floor(difference / 3600) % 24;
    if(hours > 0){
      timeCounter   += Math.floor(hours)+" hrs ";
    }
    difference    -= hours * 3600;

    var minutes    = Math.floor(difference / 60) % 60;
    if(minutes > 0){
      timeCounter   += Math.floor(minutes)+" mins ";
    }
    difference    -= minutes * 60;
    var seconds    = difference % 60;
    if(seconds > 0){
      timeCounter  += Math.floor(seconds)+" secs ";
    }

    return timeCounter;
}
}
