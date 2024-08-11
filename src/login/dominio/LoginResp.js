export class LoginResp{
    constructor(idUser,permisoAdmin,userName){
        this.userName=userName
        this.idUser=idUser;
        this.permisoAdmin=permisoAdmin;
    }    
    static fromJson(json){
        return new LoginResp(json.idUser,json.permisoAdmin,json.userName);
    }
     
}