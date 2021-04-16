
import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../service/services.service';
import {Photo} from '../../interfaces/Foto';
import {Router} from '@angular/router';


interface HtmlInputEvent extends Event{ 
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  fotos=[];
  fotoShow=[];
  imgMostrar=[];
  constructor(private fotoService:ServicesService, private router:Router ) { }

  ngOnInit() {

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

   myFunction(changeText) {
    
    var x = document.getElementById("demo");
    if (changeText==true){
      
      setTimeout(function(){ alert("Hello"); }, 6000);
    }
   
    
    
    console.log(changeText);
  }



}
