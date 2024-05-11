import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/public/login/userservice';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    const userId=this.UserService.getUserId();
    this.getInfoProf(userId);
    throw new Error('Method not implemented.');
   
  }
  InfoProf:any;
  constructor(private http: HttpClient,private UserService: UserService) { }

  
  getInfoProf(id:any)
  {
    this.http.get('http://localhost:3000/users/'+id).subscribe(data => {
      console.log('info prof :',data);
      this.InfoProf= data;
     
     
    });
  }
 
  
}
