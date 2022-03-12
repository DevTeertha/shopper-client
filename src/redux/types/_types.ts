export interface IProduct {
  productName: string | undefined;
  price: string | undefined;
  variant: string[] | Blob;
  image: string | undefined;
  stock: string | undefined;
}
