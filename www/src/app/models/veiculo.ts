import { Marca } from "./marca";

export interface Veiculo {
    id?: number;
    anoFabricacao: number;
    anoModelo: number;
    cor: string;
    placa: string;
    marca: Marca;
}