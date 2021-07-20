import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Article } from 'src/Model/Article';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{


  @Input()
  article!: Article;
  @Output() gotoContent = new EventEmitter<any>()
  constructor(
  ) {

  }

  goto(){
    this.gotoContent.emit(this.article.id)
  }

}
