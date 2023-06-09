import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  popularApiData(){
    return this.http.get('http://localhost:3000/Games')
  }

  detailsApiData(data:any){
    return this.http.get('http://localhost:3000/Games/'+data)
  }
  
}
