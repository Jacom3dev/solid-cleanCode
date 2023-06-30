import axios from 'axios';

export class HttpCliente {

    async get(url:string){
        const {data,status} = await axios.get(url);
        console.log({status});
        return {data,status};
    }
}