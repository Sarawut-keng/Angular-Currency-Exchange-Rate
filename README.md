# AngularExchangeRate 💰

##### This project is a web application that anyone can compute the exchange rate for more than 50 currencies worldwide.

##### 🖥 Front-End: Angular, Angular Material, CSS
##### 👷🏻‍♂️ Backe-End: API from [Exchangerateapi](https://exchangeratesapi.io/)

##### In this project I have to use the HtttpClient module to get the data from API, also I have to use the service method to calling the access key to API and for the security local with .gitignore.

##### Any one who want to folk or clone this project please create ```backend.service.ts``` to store your own API's access key, create the interface to access the data in form and the last create service medthod to return the name of curency below

```typescript
export interface Convert {
  fromCurrencyAmount: number;
  fromCurrencyCode: string;
  toCurrencyAmount: number;
  toCurrencyCode: string;
}

 accessKey: string = 'Your Key';

  getAccessKey() {
    return this.accessKey;
  };

  getCurrencyCode() {
    return ["AED", "AFN", "ALL", "AMD", "ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTC","BTN","BWP","BYN",
    "BYR","BZD","CAD","CDF","CHF","CLF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP",
    "GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW",
    "KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD",
    "NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS",
    "SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XAU","XCD",
    "XDR","XOF","XPF","YER","ZAR","ZMK","ZMW","ZWL"]
  };
```

### This is UI of the project. 👇🏻

<img width="1434" alt="Exchange-rate-with-angular" src="https://user-images.githubusercontent.com/68180592/123462102-17af8180-d614-11eb-9bc1-6494bc944fbb.png">

<img width="1434" alt="Exchange-rate-with-angular" src="https://user-images.githubusercontent.com/68180592/123462115-1aaa7200-d614-11eb-9c80-be424841d91e.png">


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

