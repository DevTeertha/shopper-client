export interface VariantI {
  variant: string;
  price: string;
}
export interface userInfoI {
  email: string;
  password: string;
}
export interface ImageObjectI {
  contentType: string;
  size: number;
  img: string;
}
export interface addProductI {
  _id?: string;
  productName: string;
  description: string;
  stock: string;
}
export interface setSearchStateI {
  searched: string;
  setSearched: (value: string) => void;
}

export interface cartItemI {
  _id: string;
  productName: string;
  price: string;
  quantity: number;
  selectedVariant: string;
  img: ImageObjectI;
}
export interface cartinitialState {
  cartItems: cartItemI[];
  totalItems: number;
  totalPrice: number;
}

export interface productI {
  _id: string;
  productName: string;
  description: string;
  stock: string;
  variant: VariantI[];
  img: ImageObjectI;
}

export interface productPropsI {
  product: productI;
}
export interface getOrdersI {
  _id: string;
  user: {
    name: string;
    email: string;
    userId: string;
  };
  totalPrice: string;
  orderList: cartItemI[];
  orderStatus: string;
  date: string;
}
export type orderState = {
  loading: boolean;
  data: getOrdersI[];
};

export interface productDetailsI {
  _id: string;
  productName: string;
  description: string;
  stock: number;
  variant: VariantI[];
  img: ImageObjectI;
}
