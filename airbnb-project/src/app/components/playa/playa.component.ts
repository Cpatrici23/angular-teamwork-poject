import { Component, OnInit } from '@angular/core';
import { IVivienda } from '../models/vivienda.model';

@Component({
  selector: 'app-playa',
  templateUrl: './playa.component.html',
  styleUrls: ['./playa.component.css']
})
export class PlayaComponent  implements OnInit{
  
  viviendas: IVivienda[] = []
  
  
  ngOnInit(): void {
    this.viviendas = [
      {isAvailable: true, id:1 ,img:'../../../assets/img/1imgplaya.webp',title:'Azulprofundo'},
      {isAvailable:false, id:2 ,img: '../../../assets/img/2imgplaya.webp',title:'Azulclarito'},
      {isAvailable:true, id:3 ,img: '../../../assets/img/3imgplaya.webp',title:'Azulaguamarina'},
      

    ]
  }

}

