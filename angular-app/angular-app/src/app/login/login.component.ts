import { Component, OnInit, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isPasswordInvalid = false;
  isEmailInvalid = false;
  email = "";
  password = ""; 

  ngOnInit(): void {
  }

  
  validateEmail(event: any): void {
    this.email = event.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,}$/;
    this.isEmailInvalid = !emailRegex.test(this.email);
  }
 
  validatePassword(event: any): void {
    this.password = event.target.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/;
    this.isPasswordInvalid = !passwordRegex.test(this.password);
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
    modal.classList.remove('hidden'); // Remueve la clase 'hidden'
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
