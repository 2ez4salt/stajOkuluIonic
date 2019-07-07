import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ilkDegiskenimiz:string  = "Staj Okul";
  gorevListesi = [];
  arr = [1,2,3,4,5];
  task;
  constructor(public navCtrl: NavController,public alertCtrl:AlertController) {}
  
  girisAction(kullancıAdı,sifre) {
    console.log("Kullanıcı Adınız : " + kullancıAdı)
    console.log("Şifreniz : " + sifre)
    const bizimAlertımız = this.alertCtrl.create({
      title: 'Hoşgeldin Stajyer',
      subTitle: 'Kullanıcı Adınız : ' + kullancıAdı +  '<br>'+ ' Şifreniz : ' + sifre,
      buttons: ['OK'],
      enableBackdropDismiss : false
    });
    bizimAlertımız.present()  
  }

  addTask(gorev){
    this.gorevListesi.push(gorev)
    console.log(this.gorevListesi);
    this.task = '';
  }


  
}
