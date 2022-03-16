export interface VariantI {
    variant: string,
    price: string
}
export interface ImageObjectI {
    contentType: string,
    size: number,
    img: string
}
export interface addProductI {
    productName: string,
    description: string,
    stock: string
}
export interface setSearchStateI {
    searched: string,
    setSearched: (value: string) => void
}

export interface cartItemI {
    _id: string,
    productName: string,
    price: string,
    quantity: string,
    selectedVariant: string,
    img: ImageObjectI
}
export interface cartinitialState {
    cartItems: cartItemI[],
    totalItems: number,
    totalPrice: number
}