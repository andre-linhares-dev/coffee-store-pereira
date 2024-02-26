import { Routes, Route } from "react-router-dom";
import { NavBar } from "../NavBar";
import { ItemListContainer } from "../ItemListContainer";
import { ItemDetailContainer } from "../ItemDetailContainer";
import Contact from "../../pages/Contact";



function Router() {

return(
<>
    <NavBar/>
        <Routes>
            <Route exact path="/" element = {<ItemListContainer/>} />
            <Route exact path="/product/:id" element={<ItemDetailContainer />}/>
            <Route exact path="/contact/" element={<Contact/>}/>
        </Routes>
</>
)
}

export {Router }