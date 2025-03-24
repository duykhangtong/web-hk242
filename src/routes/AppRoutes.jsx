import Product from '../components/Product/Product'
import { Route, Routes } from "react-router-dom";
export default function AppRoutes(){
    return(
        <>
          <Routes>
            <Route path='/Game/Products'element={<Product />} />
          </Routes>
        </>
    )
}