import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public products :any = [];
  public grandTotal :number = 0;
  constructor(private cardService:CardService) { }

  ngOnInit(): void {
    this.cardService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cardService.getTotalPrice();
    })
  }
  removeItem(item:any){
    this.cardService.removeCardItem(item);
  }
  emptyCard(){
    this.cardService.removeAllCards();
  }


}
