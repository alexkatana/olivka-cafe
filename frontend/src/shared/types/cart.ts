export type CartItem = {
    id: number,
    name: string,
    price: number,
    quantity: number,
    image: string
    weight: number,

}

export type CartState = {
    items: CartItem[],
    total: number, 
    itemCount: number
}