import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Retro Barcode Generator';
  imageArray: string[] = [];

  fillImageArray(){
      for(let i =0; i <10; i++){
          const randNum: number = (Math.floor(Math.random() *3) +1)
          if (randNum ===1){
               this.imageArray.push('Indigo');
           } else if (randNum === 2) {
               this.imageArray.push('SteelBlue');
           } else if (randNum === 3) {
               this.imageArray.push('LightSeaGreen');
           } else if (randNum === 4) {
               this.imageArray.push('DarkViolet');
           } else if (randNum === 5) {
               this.imageArray.push('CadetBlue');
          } else if (randNum === 6) {
              this.imageArray.push('MediumBlue');
          }
      }
  }

  ngOnInit() {
      console.log(this.fillImageArray)
      this.fillImageArray();
  }
}
