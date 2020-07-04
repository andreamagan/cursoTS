"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observable = void 0;
class Observable {
    constructor(observers = []) {
        this.observers = observers;
    }
    ;
    addObserver(observer) {
        this.observers.push(observer);
    }
    deleteObserver(observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    }
    notify(obj) {
        this.observers.forEach(observer => {
            observer.update(obj);
        });
    }
}
exports.Observable = Observable;
