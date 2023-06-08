import { Component } from '@angular/core';
import DataJson from '../../assets/data.json';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})



export class DestinationComponent {
    arrayData: any = [];
    headerVal:String =this.arrayData.
    moonImgAdd:String = ""
    moonDescription = ""
    distance:String = ""
    constructor(){
    this.arrayData = DataJson;
    console.log(this.arrayData.destinations[0].name);

  }

  mars(){
   this.headerVal = this.arrayData.destinations[1].name
   this.moonImgAdd = this.arrayData.destinations[1].images.png
   this.moonDescription = this.arrayData.description
   this.distance = ""
  }


}
