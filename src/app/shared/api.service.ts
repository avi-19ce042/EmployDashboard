import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

    postEmployee(data : any) {
      return this.http.post<any>("http://localhost:3000/employs", data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    getEmployee() {
      return this.http.get<any>("http://localhost:3000/employs")
      .pipe(map((res:any)=>{
        return res;
      }))
    }
   deleteEmployee(id:number) {
      return this.http.delete<any>("http://localhost:3000/employs/"+id)
      .pipe(map((res:any)=>{
        return res;
      }))
    } 
    //to bind data from list to form
    updateEmployee(id:any) {
      return this.http.get<any>("http://localhost:3000/employs/"+id)
      .pipe(map((res:any)=>{
      return res;
     }))
}
//to update the form data with reference to id
updateOneEmployee(data:any,id:number) {
  return this.http.put<any>("http://localhost:3000/employs/"+id,data)
  .pipe(map((res:any)=>{
  return res;
 }))
}
}
//     updateEmployee(id:number) {
//   return this.http.put<any>(`http://localhost:3000/posts?id=${id}`)
//   .pipe(map((res:any)=>{
//     return res;
//   }))
// }




