export interface IProduct {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: IGuarantee;
  price: IPriceEntity[];
  order: number;
  date: string;
}
export interface IGuarantee {
  start: string;
  end: string;
}
export interface IPriceEntity {
  value: number;
  symbol: string;
  isDefault: number;
}
