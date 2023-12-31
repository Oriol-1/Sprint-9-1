import { ValidSizes, IUser } from './';

export interface IOrder {

    _id? : string;
    user?: IUser | string;
    orderItems: IOrderItem[];
    shippingAddress: ShippingAddress;
    paymentResult?: string;

    numberOfItems: number;
    subTotal     : number;
    tax          : number;
    total        : number;

    isPaid  : boolean;
    paidAt? : string;
}


export interface IOrderItem {
    _id      : string;
    title    : string;
    size     : ValidSizes;
    quantity : number;
    slug     : string;
    image    : string;
    price    : number;
     
    // gender   : string;
}

export interface ShippingAddress {
    firstName: string;
    lastName : string;
    email : string;
    phone    : string;
    address  : string;
    zip      : string;
}