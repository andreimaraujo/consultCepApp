import { Local } from "./types";

export const getFieldHelper = (local: any, field: string) => {

    switch (field) {
        case "cep":
            return local.cep;
        case "logradouro":
            return local.logradouro;
        case "complemento":
            return local.complemento;
        case "bairro":
            return local.bairro;
        case "localidade":
            return local.localidade;
        case "uf":
            return local.uf;
        case "unidade":
            return local.unidade;
        case "ibge":
            return local.ibge;
        case "gia":
            return local.gia;
    }
}