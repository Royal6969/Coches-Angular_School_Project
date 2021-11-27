export interface CochesModel {
    id: number;
    marca: string;
    modelo: string;
    color: string;
    cv: number;
    descripcion: string;
    mensaje: string;
    equipamiento: {
        starStop: string,
        sensoresLucesLluvia: string,
        puertosUSB: string,
        navegador: string,
        ledsDiurnas: string,
        lunasTintadas: string,
        frenosABS: string,
        llantasAleacion: string,
        climatizador: string,
        camaraTrasera: string,
        bluetooh: string,
        direccionAsistida: string,
    };
    ranking: number;
    imagen: string;
    imagen1: string;
    imagen2: string;
    imagen3: string;
    imagen4: string;
    imagen5: string;
    imagen6: string;
    imagen7: string;
    imagen8: string;
    imagen9: string;
    imagen10: string;
    logo: string;
    precio: number;
}
