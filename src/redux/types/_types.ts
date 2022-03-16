export interface IProduct {
  _id: string,
  productName: string | undefined;
  price: string | undefined;
  variant: string[] | Blob;
  image: string | undefined;
  stock: string | undefined;
}
