export interface IProduct {
  _id: string,
  productName: string | undefined;
  price: string | undefined;
  variant: string[] | Blob;
  image: string | undefined;
  stock: string | undefined;
}
export interface loginUserStateI {
  loading: boolean,
  user: {
    token?: string
  },
  error: string
}
export interface placeOrderStateI {
  loading: boolean,
  data: {
    status: boolean,
    message: string
  },
  error: string
}
export interface userDetailsStateI {
  loading: boolean,
  user: {
    status?: boolean,
    user?: {
      name?: string,
      email?: string,
      userId?: string
    },
    message?: string
  },
  error: ""
}
export interface UserI {
  userId: string,
  email: string,
  name: string
}
export type PlaceOrderAction = {
  type: string,
  payload: string
}