import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ServicesService} from '../../service/services.service';
import {Photo} from '../../interfaces/Foto';
import { interval } from 'rxjs';
import { timeout } from 'rxjs/operators';

interface HtmlInputEvent extends Event{ 
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-foto-prew',
  templateUrl: './foto-prew.component.html',
  styleUrls: ['./foto-prew.component.css']
})
export class FotoPrewComponent implements OnInit {
  id:string;
  foto:Photo;
  file: File;
  indice:string;
  fotos=[];
  

  fotoSeleccionada: string | ArrayBuffer;
  constructor(

    private activatedRoute:ActivatedRoute,
    private router:Router,
    private FotoService :ServicesService
  )
   { }

  ngOnInit() {
     
     this.activatedRoute.params.subscribe(params=>{
      this.id=params['id'];
      this.FotoService.getFoto(this.id).subscribe(
        res=> {

          this.foto=res
          console.log(this.foto)
        },
        err=> console.log(err)
      );
      
    })
     
    this.getFotos();

    

  }



  getFotos(){


    this.FotoService.getFotos()
    .subscribe(
      res=>{
        console.log(res)
        this.fotos=res;

        for (var i = 0; i < this.fotos.length; i++) {
           console.log(this.fotos[i].title)
           console.log(this.fotos.length)
         
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
      console.log(this.file);

    }
  }


  

  deleteFoto(id:string){
  
       this.FotoService.deleteFoto(id).subscribe(
         res=>{
               console.log(res);
               this.getFotos();
               setTimeout (() => {
               
                this.updateFoto();
             }, 2000);
               
             
         },
       
       )
  }
/*
  updateFoto(title:HTMLInputElement, description:HTMLTextAreaElement):boolean{
    this.FotoService.updateFoto(this.id, title.value, description.value, this.indice).subscribe(
      res=>{
          console.log("Hola sdad");
        this.router.navigate(['/lista'])
      },
      err=>(console.log(err))
    )
    return false;
  }
  */
  updateFoto():boolean{
    console.log(this.foto.description);
    console.log(this.fotos.length);
    
    console.log(this.fotos.length);

   
    for (var i = 0; i < this.fotos.length; i++) {
      this.fotos[i].indice=i.toString();
      
      console.log(this.fotos[i].indice);
      this.FotoService.updateFoto1(this.fotos[i]._id,  this.fotos[i].title, this.fotos[i].description, this.fotos[i].indice).subscribe(
        res=>{
          
          console.log(res);
          console.log("Gaia")
          this.router.navigate(['/lista'])
         
        },
        err=>(console.log(err))
      )

    }
    console.log("limite")
  

     

    
  
    return false;
  }


  uploadPhoto(title:HTMLInputElement, description:HTMLTextAreaElement):boolean
  {

    this.indice=this.foto.indice;
    console.log(this.indice);
     this.FotoService.createPhoto(title.value, description.value, this.file, this.indice)
     .subscribe(res=>{
      this.router.navigate(['/lista'])
     },
     err=>console.log(err),
    
     )
     console.log(title.value);
     console.log(description.value)
     return false;
  }


  eres(foto, title: HTMLInputElement, description:HTMLTextAreaElement):boolean
  {

        console.log("hola");
        
        //const promesa = crearArchivoAudioAsync(this.deleteFoto(foto._id));
        //promesa.then(this.updateFoto);
        this.FotoService.deleteFoto(foto._id).subscribe(
          res=>{

               
               this.uploadPhoto(title, description)
          },
          res=>console.log(res)
        )
  
   
  
    
    
    return false;
  }


 

    
    


  }

