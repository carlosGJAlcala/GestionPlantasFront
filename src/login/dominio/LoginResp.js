export class LoginResp{
    constructor(idUser,permisoAdmin,userName,token){
        this.userName=userName
        this.idUser=idUser;
        this.permisoAdmin=permisoAdmin;
        this.token=token;
    }    
    static fromJson(json){
        return new LoginResp(json.idUser,json.permisoAdmin,json.userName,json.token);
    }
     
}