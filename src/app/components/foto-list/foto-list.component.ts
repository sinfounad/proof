import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../service/services.service';
import {Photo} from '../../interfaces/Foto';
import {Router} from '@angular/router';
import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';




@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent implements OnInit {

  fotos=[];
  fotoShow=[];
  imgMostrar=[];
  lessons=false;
  constructor(private fotoService:ServicesService, private router:Router ) { }

  ngOnInit() {

    
    console.log(this.lessons)
    this.fotoService.getFotos()
    .subscribe(
      res=>{
        console.log(res)
        this.fotos=res;
        
        for (var i = 0; i < this.fotos.length; i++) {
          for (var j = 0; j < this.fotos.length; j++) {

           if(this.fotos[i].indice==j){
            
            this.imgMostrar[j]=this.fotos[i]
           }
         
          console.log(this.imgMostrar);
        }
         
       }
      

      } ,
      err=> console.log(err)
    )


 


  }

  selectedCard(id:string){

 
    this.router.navigate(['/ced',id]);
 
  }

  getFotos(){


    this.fotoService.getFotos()
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

  deleteFoto(id:string){
  
    this.fotoService.deleteFoto(id).subscribe(
      res=>{
            console.log(res);
            this.getFotos();
            setTimeout (() => {
            
             this.updateFoto();
          }, 2000);
            
          
      },
    
    )
}

updateFoto():boolean{
  //console.log(this.foto.description);
  console.log(this.fotos.length);
  
  console.log(this.fotos.length);

 
  for (var i = 0; i < this.fotos.length; i++) {
    this.fotos[i].indice=i.toString();
    
    console.log(this.fotos[i].indice);
    this.fotoService.updateFoto1(this.fotos[i]._id,  this.fotos[i].title, this.fotos[i].description, this.fotos[i].indice).subscribe(
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
cambioE(){
 console.log("esta adentro");
 

}

alerta(){

  alert("hola hola mis mocosloscos")

}
mostrarAlerta(filtro){
  console.log("Ala madrid");


 
  
  if(filtro==true){

   
  }
 if(filtro==false){

  
 }

 
 

}

mostrarAlerta2(){
  document.getElementById("mostrar").style.display="block";
 
 }




}
