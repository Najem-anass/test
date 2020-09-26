export class AuthService {

  isAuth = false;

  constructor() { }

  connect(){
    this.isAuth=true;
  }
  
  deconnect(){
    this.isAuth = false;
  }
}
