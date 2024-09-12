import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { createContext, CSSProperties, ReactElement } from "react";
import { InitialValue, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element,
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValue?: InitialValue
}


export const ProductCard = ({ children, product, className, style, onChange, value, initialValue }: Props) => {


    const { counter, increaseBy, maxCount, isMaxCountReached, reset }
        = useProduct({ onChange, product, value, initialValue });


    return (

        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount

        }}>
            <div className={`${styles.productCard} ${className}`}
                style={style}
            >


                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValue?.maxCount,
                    product,

                    increaseBy,
                    reset
                })}

            </div>
        </Provider>




    )
}
