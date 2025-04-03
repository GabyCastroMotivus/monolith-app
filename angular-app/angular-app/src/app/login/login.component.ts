import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {}



  ngOnInit(): void {
  }
 

  closeLoginModal() {
    // Logic to close the login modal
    const modal = document.getElementById('id01');
    if (modal) {
        modal.style.display = 'none';
    }
}

closeSignupModal() {
    // Logic to close the signup modal
    const modal = document.getElementById('id02');
    if (modal) {
        modal.style.display = 'none';
    }
}

openLoginModal() {
  // Logic to open the login modal
  const modal = document.getElementById('id01');
  if (modal) {
      modal.style.display = 'block';
  }
}

openSignupModal() {
  // Logic to open the signup modal
  const modal = document.getElementById('id02');
  if (modal) {
      modal.style.display = 'block';
  }
}

onSignup() {
  // Logic to handle signup form submission
  console.log("Signup form submitted");
  // Add your signup logic here
}


onLogin() {
  // Logic to handle login form submission
  console.log("Login form submitted");
  // Add your login logic here
}

}
