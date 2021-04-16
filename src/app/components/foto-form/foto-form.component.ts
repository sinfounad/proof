import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {ServicesService} from '../../service/services.service';

 
interface HtmlInputEvent extends Event{ 
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-foto-form',
  templateUrl: './foto-form.component.html',
  styleUrls: ['./foto-form.component.css']
})
export class FotoFormComponent implements OnInit {
   file: File;
   fotoSeleccionada: string | ArrayBuffer;
   indice:string;
   fotos=[];
  
  constructor(private fotoService: ServicesService, private router:Router) { }

  ngOnInit() {


    this.fotoService.getFotos()
    .subscribe(
      res=>{
        console.log(res)
        this.fotos=res;

        for (var i = 0; i < this.fotos.length; i++) {
           console.log(this.fotos[i].title)
         
       }


      } ,
      err=> console.log(err)
    )

  }

  onPhotoselected(event:HtmlInputEvent):void{ 

    if(event.target.files && event.target.files[0]){ 
       this.file= <File>event.target.files[0];

      //image preview.

      const reader = new FileReader();
      reader.onload = e =>this.fotoSeleccionada= reader.result;
      reader.readAsDataURL(this.file);


    }

   
  }

  uploadPhoto(title: HTMLInputElement, description:HTMLTextAreaElement):boolean
  {
     this.indice=this.fotos.length.toString();
     this.fotoService.createPhoto(title.value,description.value, this.file, this.indice)
     .subscribe(res=>{
      this.router.navigate(['/lista'])
     },
     err=>console.log(err),
    
     )
     console.log(title.value);
     console.log(description.value)
     return false;
  }

}
