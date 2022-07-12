import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { apiService } from '../services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList :any;
  public filterCategory :any;
  searchKey:string="";
  constructor(private api:apiService, private cardService:CardService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe((res)=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category == "men's clothing"|| a.category == "women's clothing")
          {
            a.category = "clothes";
          } 
          Object.assign(a,{quantity:1,total:a.price})
      });
    })
    this.cardService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addToCard(item:any){
    this.cardService.addToCard(item);
  }
  filter(category:string){
    this.filterCategory = this.productList.filter((a:any)=>{
      if(a.category === category || category === ''){
        return a;
      }
    })
  }

}
