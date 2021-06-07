export class Action {
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.rating = 0;
    this.author = 'a13ks3y.ass@gmail.com';
  }

  title: string
  description: string
  rating: number
  author: string // @todo: email decorator?
}
