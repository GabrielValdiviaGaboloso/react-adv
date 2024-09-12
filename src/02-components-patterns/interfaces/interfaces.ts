import { Props as ProductCardProps, ProductCard } from '../components/ProductCard';
import { Props as ProductTitleProps } from "../components/Productitle";
import { Props as ProductImageProps } from "../components/Productimage";
import { Props as ProductButtonsProps } from "../components/Productbuttons";

export interface Product {
    id: string;
    title: string;
    img?: string
}

export interface ProductContextProps{
    counter: number;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
}


export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ) : JSX.Element,
    Title: ( Props: ProductTitleProps) => JSX.Element,
    Image: (Props:ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
    product:Product;
    count:number;
}

export interface ProductInCart extends Product {
    count: number
  }

export interface InitialValue {
  count?:number
  maxCount?: number;
  }

  export interface ProductCardHandlers {
    count:number;
    isMaxCountReached:boolean;
    maxCount?: number;
    product:Product;
    
    increaseBy: (value:number)=> void;
    reset: ()=> void;
  }