import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyoutPage } from '../buyout/buyout';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {}

    onBuy() {
      this.navCtrl.push(BuyoutPage);
    }

}
