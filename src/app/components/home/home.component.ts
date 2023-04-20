import { Component,OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private service:ServiceService){}

  popular:any=[]
  searchTerm:any=""
 

  ngOnInit(): void {

    this.popularResult();
    
  }

  popularResult(){
    this.service.popularApiData().subscribe((result)=>{
      console.log(result);
      this.popular=result
      
    })
  }

  search(event:any){
    this.searchTerm = event.target.value
  }

 
  


}
