// Import from Angular

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// Import from service 

import { BackendService } from 'src/app/service/backend.service';
import { Convert } from 'src/app/service/backend.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {

  form!: FormGroup; 
  accessKey!: string; // declare access key before call from service
  currencyCode!: string[]; // declare currency code before calling from service
  url!: string; // API
  response!: any; // Response of API
  toConvert!: Convert;
  convertedValue!: number;

  constructor(private fb: FormBuilder, private backendService: BackendService, private httpClient: HttpClient) {

    this.form = this.fb.group({
      fromCurrencyAmount: '',
      fromCurrencyCode: ['', Validators.required],
      toCurrencyAmount: '',
      toCurrencyCode: ['', Validators.required]
    });

  }

  ngOnInit(): void {

    this.accessKey = this.backendService.getAccessKey(); // calling access key from service
    this.currencyCode = this.backendService.getCurrencyCode(); // calling access key from service
    this.url = 'http://api.exchangeratesapi.io/v1/' + 'latest' + '?access_key=' + this.accessKey + '&format=1'; // url for calling API
    this.httpClient.get(this.url).subscribe(result => {
      this.response = result as any;
    });

  }

  convertButton() {
    this.toConvert = this.form.value;
    this.convertedValue = this.toConvert.fromCurrencyAmount / this.response.rates[this.toConvert.fromCurrencyCode] * this.response.rates[this.toConvert.toCurrencyCode];
  };

}
