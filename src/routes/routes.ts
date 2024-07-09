
import { lazy, LazyExoticComponent } from "react";


type JSXComponent = () => JSX.Element;




interface Route {
    to:string;
    path: string;
    Component:  LazyExoticComponent<() => JSX.Element> | JSXComponent;
    name:string;
}



const lazy1 = lazy(() => import (/*  webpackChunkName:"LazyPages1 "*/'../01-lazyload/pages/LazyPages1'))
const lazy2 = lazy(() => import (/*  webpackChunkName:"LazyPages2" */'../01-lazyload/pages/LazyPages2'))
const lazy3 = lazy(() => import (/*  webpackChunkName:"LazyPages3" */'../01-lazyload/pages/LazyPages3'))



export const routes :Route[]= [
    
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: lazy3,
        name: 'Lazy-3'
    }

]