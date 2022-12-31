import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name: string | null = '';
  cartPrice: number = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      this.cartPrice = Number(params.get('totalPrice'));
    })
  }

}
