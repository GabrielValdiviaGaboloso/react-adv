import { useEffect, useRef, useState } from "react";
import { InitialValue, onChangeArgs, Product } from '../interfaces/interfaces';



interface useProuctArgs {
  product:Product;
  onChange?:( args:onChangeArgs) => void 
  value?:number;
  initialValue?:InitialValue;

}




export const useProduct = ({onChange,product,value= 0, initialValue }:useProuctArgs) => {


    const [counter, setCounter] = useState<number> ( initialValue?.count || value);

    const isMounted = useRef(false)
   
    console.log(initialValue?.count);
    

    const increaseBy = (value:number) =>{
        
    

        let newValue = Math.max( counter + value , 0 )
        if(initialValue?.maxCount){
          newValue = Math.min(newValue, initialValue.maxCount)
        }


        setCounter ( newValue)
        onChange && onChange({count:newValue , product});
    }

    const reset = () =>{
      setCounter(initialValue?.count || value)
    }

    useEffect(() => {
       if(!isMounted.current) return
          setCounter(value)
    }, [value])

    useEffect(() => {
       isMounted.current = true;

     }, [])

    
return {
    counter,
    isMaxCountReached: !! initialValue?.count &&  initialValue.maxCount === counter ,
    maxCount: initialValue?.maxCount,

    increaseBy,
    reset
}

}