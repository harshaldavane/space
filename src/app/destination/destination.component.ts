import { Component } from '@angular/core';
import DataJson from '../../assets/data.json';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})



export class DestinationComponent {
    arrayData: any = [];
    headerVal:String =this.arrayData.destinations[0].name
    moonImgAdd:String = this.arrayData.destinations[0].images.png
    moonDescription:String = this.arrayData.destinations[0].description
    distance:String=this.arrayData.destinations[0].distance
    travel:String=this.arrayData.destinations[0].travel
    constructor(){
    this.arrayData = DataJson;
    console.log(this.arrayData.destinations[0].name);
  }

  mars(){
   this.headerVal = this.arrayData.destinations[1].name
   this.moonImgAdd = this.arrayData.destinations[1].images.png
   this.moonDescription = this.arrayData.destinations[1].description
   this.distance=this.arrayData.destinations[1].distance
   this.travel=this.arrayData.destinations[1].travel
  }


}
