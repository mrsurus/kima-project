import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  role = ''
  roleName = ''
  
  empGropu = { user1: 'em1@gmail.com', user2: 'em2@gmail.com'}
  conGropu = { user1: 'con1@gmail.com', user2: 'con2@gmail.com'}

  
  check(path: string) {
    console.log(this.role)
     const email = localStorage.getItem('email')
    if(this.empGropu.user1 === email || this.empGropu.user2 === email){
       this.role = 'admin'
       this.roleName = 'employee'
    }else  if(this.conGropu.user1 === email || this.conGropu.user2 === email){
      this.role = 'admin',
      this.roleName = 'conseltent'
    }
    else{
      this.role = 'user'
    }


    fetch(`http://localhost:3000/api/dashboard?user=${this.role}&&path=${path}`)
      .then((response) => {
        if (response.status === 200) {
          this.router.navigate([path]);
          console.error('Access allow');
        } else {
          console.error('Access Denied');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
