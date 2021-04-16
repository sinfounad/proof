import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { title } from 'process';
import {Photo} from '../interfaces/Foto';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
   URI ='http://localhost:4000/api/photos';
  constructor(private http: HttpClient)
   {  
   
   }

   createPhoto( title: string, description:string, photo:File,indice:string){
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);
    fd.append('indice', indice);
    console.log(indice)


    return this.http.post(this.URI, fd, );
  }


  createPhoto1( id:string, title: string, description:string, photo:File){
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);

    return this.http.post(this.URI, fd);
  }

  getFotos(){
    return this.http.get<Photo[]>(this.URI);

  }

  getFoto(id: string){

    return this.http.get<Photo>(this.URI+'/'+id);
  }
   
  deleteFoto(id:string){
     return this.http.delete( `${this.URI}/${id}`)
  }

  updateFoto(id:string, title:string, description:string,  indice:string){
    return this.http.put( `${this.URI}/${id}`,{title, description, indice})
 }
  
 updateFoto1(id:string, title:string, description:string,  indice:string){
  return this.http.put( `${this.URI}/${id}`,{ title, description, indice})
}



}
