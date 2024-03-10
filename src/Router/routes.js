import { Routes, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { ItemListContainer } from "../components/ItemListContainer";
import { ItemDetailContainer } from "../components/ItemDetailContainer";
import Contact from "../pages/Contact";
import {ShoppingCart} from "../components/ShoppingCart";



function Router() {

return(
<>
    <NavBar/>
        <Routes>
            <Route exact path="/" element = {<ItemListContainer/>} />
            <Route exact path="/product/:id" element={<ItemDetailContainer />}/>
            <Route exact path="/contact/" element={<Contact/>}/>
            <Route exact path="/shopping-cart/" element={<ShoppingCart/>}/>
        </Routes>
</>
)
}

export {Router }