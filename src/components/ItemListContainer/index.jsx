import { Info } from "../Info/Info";
import { ItemList } from "../ItemList";

const ItemListContainer = () => {
    return (
        <div className="pt-[180px]">
            <Info/>
            <ItemList/>
        </div>
    )
}

export { ItemListContainer };