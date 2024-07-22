export type CardCompany =
  | 'none'
  | 'suyeon'
  | 'sejin'
  | 'chanwook'
  | 'jonggil'
  | 'hyori'
  | 'hyesong'
  | 'jingyeong'
  | 'geonwoo';

export type CardNumber = [string, string, string, string];

export interface CardEndDate {
  month: string;
  day: string;
}

export interface MyCard {
  numbers: CardNumber;
  endDate: CardEndDate;
  cardUser: string;
  company: CardCompany;
}

export type CardPassword = [string, string, string, string];

export interface MyCardForm extends MyCard {
  securityCode: string;
  password: CardPassword;
}

export type KeypadNumbers = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
];
