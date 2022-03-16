export const searchHandler = (arr: any, searched: string): any => {
    return arr.filter((val: any) => {
        if (searched === "") {
            return val;
        } else if (val.productName.toLowerCase().includes(searched.toLowerCase())) {
            return val;
        }
    })
}
