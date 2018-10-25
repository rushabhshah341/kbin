import { Injectable } from '@angular/core';
import { Promise } from "bluebird";

@Injectable()
export class Storage {

  constructor() {}

  getItem(item) {
      return Promise.try(() => {
          return localStorage.getItem(item);
      })
  }
  setItem(key, value) {
      return Promise.try(() => {
        return localStorage.setItem(key, value);
      })
  }
}
