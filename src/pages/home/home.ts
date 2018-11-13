import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  slideData = [{ image: "../../assets/imgs/slide1.jpeg" },
  { image: "../assets/imgs/slide2.jpeg" },
  { image: "../assets/imgs/slide3.jpeg" },
  { image: "../assets/imgs/slide6.jpg" },
  { image: "../assets/imgs/slide5.jpg" },
]

shoppingData = [
  { image: "../../assets/imgs/tee.png" , title :"Tshirt"},
  { image: "../../assets/imgs/img2.jpg", title : "Dressess" },
  { image: "../assets/imgs/img4.jpg",title : "BashOut" },
  { image: "../assets/imgs/img3.jpg" ,title : "Acessory"},
  

]

  constructor(public navCtrl: NavController) {

  }

}
