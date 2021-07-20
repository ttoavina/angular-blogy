import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Article } from 'src/Model/Article';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() article!: Article
  @Output() setContent = new EventEmitter<any>()
  constructor(
  ) {

  }

  ngOnInit(): void {

  }

  next(){
    this.setContent.emit("next")
  }
  prev(){
    this.setContent.emit("prev")
  }
}
