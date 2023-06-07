import { Component } from '@angular/core';
import DataJson from '../../assets/data.json';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})



export class DestinationComponent {

  countriesList:any[] = DataJson;

  text:String="";
  moon(){
   this.text="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  }
}

