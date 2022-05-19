export class User {
    tipoIdentificacion: string;
    numeroidentificacion: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
    email: string;
    numeroCelular: string;
    numeroTelefono: string;
    rol: string;
    estado: string;
    colaborador: string;
    contraseñaPropia: boolean;
    contraseña: string;

    constructor(tipoIdentificacion: string,
        numeroidentificacion: string,
        nombre: string,
        apellido1: string,
        apellido2: string,
        email: string,
        numeroCelular: string,
        numeroTelefono: string,
        rol: string,
        estado: string,
        colaborador: string,
        contraseñaPropia: boolean,
        contraseña: string,
        ){
        this.tipoIdentificacion = tipoIdentificacion;
        this.numeroidentificacion= numeroidentificacion;
        this.nombre= nombre;
        this.apellido1= apellido1;
        this.apellido2= apellido2;
        this.email= email;
        this.numeroCelular= numeroCelular;
        this.numeroTelefono= numeroTelefono;
        this.rol= rol;
        this.estado= estado;
        this.colaborador= colaborador;
        this.contraseñaPropia= contraseñaPropia;
        this.contraseña= contraseña;
    }
}
export interface UserInterface{
    tipoIdentificacion: string;
    numeroidentificacion: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
    email: string;
    numeroCelular: string;
    numeroTelefono: string;
    rol: string;
    estado: string;
    colaborador: string;
    contraseñaPropia: boolean;
    contraseña: string;
}
