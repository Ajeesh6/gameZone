import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  constructor(private service:ServiceService,private router:ActivatedRoute){}

  gamedetails:any=[]
  popular:any=[]
  ss:any=[]
 

  

  ngOnInit(): void {

    let getId=this.router.snapshot.paramMap.get('id')
    console.log(getId,'id');
    
    
    this.getDetails(getId)
    
  }

  getDetails(id:any){
    this.service.detailsApiData(id).subscribe((result)=>{
      console.log(result);
      this.gamedetails=result
      
    })
  }

  

}
