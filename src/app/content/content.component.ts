import { Component, OnInit } from '@angular/core';
import { Article } from 'src/Model/Article';
import data from  '../../Model/database.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  articles: Article[];
  current: number = 0;
  constructor() {
    this.articles = []
  }

  ngOnInit(): void {
    let d: any = data;
    let it: number = 0
    for (let key in d) {
      this.articles.push(
        new Article(it++ , <string>key , <string>d[key]["intro"] , <string>d[key]["path"],<string>d[key]["content"])
      )
    }

    console.log(this.articles)
  }

  startSwitch(val: string){
    if(val == "next"){
      if(this.current<this.articles.length){
        this.current++
      }else{
        this.current = 0
      }
    }
    if(val == "prev"){
      if(this.current>0){
        this.current--
      }else{
        this.current = this.articles.length-1
      }
    }
    document.getElementById("value")?.scrollIntoView()
  }

  contentSwitch(val:number){
    this.current = val
    document.getElementById("value")?.scrollIntoView()
  }

}
