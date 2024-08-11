class Login{
    constructor(userName,password){
        this.userName=userName;
        this.password=password;
    }
    static fromJson(json){
        return new Login(json.userName,json.password);
    }
}export default Login;
