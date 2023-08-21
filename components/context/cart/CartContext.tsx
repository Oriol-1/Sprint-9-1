import { createContext} from 'react';

import { ICartroduct, ShippingAddress } from '@/components/interfaces';


interface ContextProps{
    isLoaded: boolean;
    cart: ICartroduct[];
    numberOfItems: number;
    subTotal: number;
    tax: number;
    total: number;

    shippingAddress?: ShippingAddress,
   //Methods
    addProductToCart: (product: ICartroduct) => void;
    updateCartQuantity: (product: ICartroduct) => void;
    removeCartProduct: (product: ICartroduct) => void;
    updateAddress: (address: ShippingAddress) => void;


    // Orders
    createOrder: () => Promise<{ hasError: boolean; message: string; }>;


}


export const CartContext = createContext ( {} as ContextProps);


