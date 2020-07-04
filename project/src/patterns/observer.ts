export interface Observer {
  update: Function;
}

export class Observable {
  constructor(protected observers: Observer[] = []){};
  
  public addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  public deleteObserver(observer: Observer) {
    this.observers.splice(this.observers.indexOf(observer),1);
  }

  public notify(obj: any) {
    this.observers.forEach(observer => {
      observer.update(obj);
    });
  }
}