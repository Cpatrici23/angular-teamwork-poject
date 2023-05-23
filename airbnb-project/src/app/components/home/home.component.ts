import { IVivienda } from './../models/vivienda.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  viviendas: IVivienda[] = []


  ngOnInit() {
    this.viviendas = [
      {isAvailable: true, id:1 ,img:'../../../assets/images/0da70267-d9da-4efb-9123-2714b651c9fd.webp' ,title:'saheli'},
      {isAvailable:false, id:2 ,img: '../../../assets/images/eaf8887f-410f-41e4-be1b-88c2a74fbfcf.webp',title:'kohestani'},
      {isAvailable:true, id:3 ,img: '../../../assets/images/3img.webp',title:'shahri'},
      {isAvailable:false, id:4 ,img: '../../../assets/images/4img.webp',title:'yoga'},
      {isAvailable:false, id:4 ,img: '../../../assets/images/4img.webp',title:'yoga'},
      {isAvailable:false, id:4 ,img: '../../../assets/images/4img.webp',title:'yoga'},


    ]
  }


}
