import axios from 'axios';

export const baseUrl = "https://iss.moex.com/iss/securities.json?q=";
export const mtssUrl = `${baseUrl}MTSS`;
export const sberUrl = `${baseUrl}SBER`;
export const yndxUrl = `${baseUrl}YNDX`;


export const getBankDataColumns = async () => {
    const result = await axios.get(mtssUrl).then(({ data }) => data.securities.columns);
    return result;
}

export const getBankDataValues = async () => {
    const result = await axios.get(mtssUrl).then(({ data }) => data.securities.data);
    return result;
}