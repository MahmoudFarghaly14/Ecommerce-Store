import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem:number = 0;
  public searchTerm:string="";
  
  constructor(private cardService:CardService) { }

  ngOnInit(): void {
    this.cardService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cardService.search.next(this.searchTerm);
  }
 

}
