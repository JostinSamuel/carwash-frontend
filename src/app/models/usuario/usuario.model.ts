export class Usuario {
    public id?: string;
    public username?: string;
    public password?: string;
    public email?: string;
    public role?: string;

    constructor(data: Partial<Usuario>){
        this.username = data.username || ''
        this.password = data.password || ''
        this.email = data.email || ''
        this.role = data.role || 'user'
    }
}


export interface UsuarioInterface {
    id?: string;
    username?: string;
    password?: string;
    email?: string;
    role?: string;
}
