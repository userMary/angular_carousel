import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }

  async getImages(): Promise<string[]> {
    const response = await fetch('http://localhost:4200/api/images.json');
    return await response.json();
  }

  // объяснение Promise: объект который позволяет дождаться какого-то результата и сделасть что-то с этим результатом

  /*
  // черновик
  draft(){
    // Promise - это объект
    // pending - ожидание. - когда только стоздали Promise
    // когда Promise разрешается - fullfield
    // когда Promise отклоняется - rejected
    // .then - метод - инструкция - что делать, когда Promise перейдет в одно из состояний. 1й аргумент (callback) - on fullfiels, 2й аргумент (callback) - on rejected.
    // 1й - resolve, 2й - reject
    // catch - метод - 1 аргумент.
    let globalData;
    const p = new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest(); // 1 создали объект
      // что и каким методо мы хотим отправить
      xhr.open("GET", "/images.json"); // 2 - зарядили
      // call back - передача ф-ии в ф-ию
      xhr.onloadend = () => {
        resolve(JSON.parse(xhr.responseText));
      }; // шаг 4 или 5 .... или 28?
      xhr.onerror = () => {
        reject("Всё пропало!");
      }
      // call back hell - ф-ия передана в ф-ию => получен результат => а затем может еще передаем в функцию и еще в ф-ию и еще в ф-ию
      xhr.send();// запрос отправили
  });
    p.then(data => globalData = data);
  }

  draft2() {
    let globalData;
    let p = fetch("/images.json");
    p.then(response => response.json())
    p.then(data => globalData = data);
  }

  async draft3() {
    let response = await fetch("/images.json");
    let data = await response.json();
    let globalData = data; // yeild
  }*/

}
