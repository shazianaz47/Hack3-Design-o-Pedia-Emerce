



export interface Product{
    _id:number;
    category:string;
    stockLevel:number;
    title:string;
    _type:"product";
    description:"text";
    price: number;
    slug:{
        _type : "slug"
        current:string;
    }
    discountPercentage:number;
    imageUrl:string;
    productImage:{
        assest:{
            _ref:string;
        };
    };
    tags:string[];
    isNew:boolean;
}
