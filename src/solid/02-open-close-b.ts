// Hay que agregar la dependencia de axios ```yarn add axios```
import axios from 'axios';
import { HttpCliente } from './02-open-close-c';


export class TodoService { 
    constructor(private http:HttpCliente){}

    async getTodoItems() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {
    constructor(private http:HttpCliente){}

    async getPosts() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {
    constructor(private http:HttpCliente){}

    async getPhotos() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}