#Monolith-app

##Installation

###Backend
You should have Java 17 and maven 3.9.9 installed on your machine.
Then you can go to the backend directory and run the following commands:
 `mvn clean install -U `
 `mvn spring-boot:run`



 ###Angular-app
You should have node.js 19.9.0
Then you can go to the angular-app/angular-app directory and run the following command:
`npm install @angular/cli@12`
open the power shell and run the command:
`$env:NODE_OPTIONS = "--openssl-legacy-provider"`
`ng serve --open`