import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temperature-converter.component.html',
  styleUrl: './temperature-converter.component.css'
})
export class TemperatureConverterComponent {

 cel:number=0;
 fahr:number=32;

 convertCelToFahr():void {

  this.fahr =(this.cel *9 /5)+32;
 }

 convertFahrToCel():void {
  this.cel = (this.fahr-32)*5/9;
 }
}
