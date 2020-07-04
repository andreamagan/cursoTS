class Book {
  protected title: string | undefined;
  protected author: string | undefined;
  protected rating: number | undefined;
  protected content: string | undefined;

  setTitle(title: string) {
    this.title = title;
    return this;
  }
  setAuthor(author: string) {
    this.author = author;
    return this;
  }
  setRating(rating: number) {
    this.rating = rating;
    return this;
  }
  setContent(content: string) {
    this.content = content;
    return this;
  }
  getInfo() {
    return `A ${this.title} book is written by ${this.author} with ${
      this.rating
    } out of 5 stars`;
  }
}

console.log(
  new Book()
    .setTitle('Hamlet')
    .setAuthor('William Shakespeare')
    .setRating(3)
    .setContent("Last night of all, When yond same star thats westward from the pol...")
    .getInfo(),
);