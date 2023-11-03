export const add = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

export const remove = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}