import { Component } from '@angular/core';
import DataJson from '../../assets/data.json';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})



export class DestinationComponent {
    arrayData: any = [];
    moonImgAdd:any=""
    headerVal:any=""
    moonDescription:any=""
    distance:any=""
    travel:any=""
    constructor(){
    this.arrayData = DataJson;
    console.log(this.arrayData.destinations[0]);
    this.moon();
  }

  moon(){
    this.moonImgAdd = this.arrayData.destinations[0].images.png;

    this.headerVal =this.arrayData.destinations[0].name;

    this.moonDescription = this.arrayData.destinations[0].description;

    this.distance = this.arrayData.destinations[0].distance;

    this.travel=this.arrayData.destinations[0].travel;
   }

  mars(){
   this.headerVal = this.arrayData.destinations[1].name
   this.moonImgAdd = this.arrayData.destinations[1].images.png
   this.moonDescription = this.arrayData.destinations[1].description
   this.distance=this.arrayData.destinations[1].distance
   this.travel=this.arrayData.destinations[1].travel
  }

  uropa(){
    this.headerVal = this.arrayData.destinations[2].name
    this.moonImgAdd = this.arrayData.destinations[2].images.png
    this.moonDescription = this.arrayData.destinations[2].description
    this.distance=this.arrayData.destinations[2].distance
    this.travel=this.arrayData.destinations[2].travel
   }

   titan(){
    this.headerVal = this.arrayData.destinations[3].name
    this.moonImgAdd = this.arrayData.destinations[3].images.png
    this.moonDescription = this.arrayData.destinations[3].description
    this.distance=this.arrayData.destinations[3].distance
    this.travel=this.arrayData.destinations[3].travel
   }

}
