import axios from "axios";
import dotenv from "dotenv";


dotenv.config();

export default class CurrencyExchanger {
    static async changeCurrency(currency, dateString) {
        const date = new Date(dateString);
        const api = `${process.env.CURRENCY_EXCHANGE_API}&date=${date.getFullYear()}-${date.getMonth().toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
        let EtbRate;
        await axios
              .get(api)
              .then(async (response) => {
                if (response.data.base !== "USD") {
                    return new Error("Base is not USD")
                }
                EtbRate = response.data.rates.ETB;
              })
              .catch((err) => {
                return new Error(err.toString());
              })
        EtbRate = 1 / EtbRate;
        currency = EtbRate * currency;
        return currency;
    }
}