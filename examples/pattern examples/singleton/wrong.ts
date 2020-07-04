class Singleton {
  public someMethod() { 
    console.log('antipatron');
  }

  static getInstance() {
    return new Singleton();
  }
}

// Using
let singleton = new Singleton();
var x = Singleton.getInstance()
x.someMethod();
