

export interface Product{
    
    id?:string,
    code?:string,
    name:string,
    description:string,
    category?:Category,
    unitPrice:number,
    thumbnail:string,
    currency:string
    createdAt:string,
    updatedAt:string,
    createdBy?:User
    inventories?:Inventory,
    reviews:Review,
    
}

export interface Category{
    id?:string,
    name:string,
    createdAt:string,
    updatedAt:string,
    createdBy?:User
    updatedBy?:User
}

export interface User{
    id?:string,
    email:string,
    phoneNumber:string,
    firstName:string,
    lastName:string,
    isActive:boolean,
    createdAt:string,
    updatedAt:string,
    shippingAddress:string,
    stripeAccountId:string,
    currency:string,
    roles:Role
}

export interface Role{
    id:string,
    name:string,
    users:string
    createdAt:string,
    updatedAt:string
}

export interface Inventory{
    id?:string,
    quantity:string,
    createdAt:string,
    updatedAt:string,
    code:string,
    owner:User,
    updatedBy:User,

}

export interface Review{
    id?:string,
    rating?:string,
    comment?: string,
    createdAt:string,
    updatedAt:string,
    ratedBy:User,
    updatedBy:User,

}

export interface Store{
    id?:string,
    name:string,
    description:string,
    address:string,
    image:string,
    createdAt:Date,
}

export interface Manager{
    id?:string,
    email:string,
    phoneNumber:string,
    firstName:string,
    lastName:string,
    createdAt:Date,
    shippingAddress:string
}