import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPages1,LazyPages2,LazyPages3 } from "../pages";


export const LazayLayout = () => {
    return (
        <div>

            <h1>LazayLayout Page  </h1>
            <ul>
                <li>
                    <NavLink to="lazy1">
                     Lazy1
                    </NavLink>
                    
                </li> 
                <li>
                <NavLink to="lazy2">
                     Lazy2
                    </NavLink>
                  
                </li>
                <li>
                <NavLink to="lazy3">
                     Lazy3
                    </NavLink>
                </li>
            </ul>
            {/* Rutas hijas iran aqui*/}
            <Routes>

                <Route path="lazy1" element={<LazyPages1/>} ></Route>
                <Route path="lazy2" element={<LazyPages2/>} ></Route>
                <Route path="lazy3" element={<LazyPages3/>} ></Route>

                {/* <Route path="*" element={<div>Not Found</div>} ></Route> */}
                <Route path="*" element={<Navigate replace to="lazy1"/>} ></Route>
            </Routes>
        </div>



    )
}

export  default LazayLayout;