import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  displayFullPrice() {
    currency_values = Currency.displayFullCurrency();
    return `${this.amount} ${currency_values}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

}
