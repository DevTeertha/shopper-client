export interface addProductI {
    productName: string,
    description: string,
    price: string,
    stock: string
}
export interface setSearchStateI {
    searched: string,
    setSearched: (value: string) => void
}