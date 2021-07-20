export class Article{
  id: number;
  path: string;
  content: string;
  title: string;
  intro: string;

  constructor(id:number,title:string,intro:string,path:string,content:string){
    this.id = id;
    this.path = path;
    this.content = content;
    this.title = title;
    this.intro = intro
  }

}
