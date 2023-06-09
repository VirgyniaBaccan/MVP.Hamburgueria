import { Product } from "./Product"
import { StyledList } from "./Product/list"


export const List = ({filteredProducts, setProducts}) => {
    return (
        <StyledList>
            <Product filteredProducts={filteredProducts} setProducts={setProducts}/>
        </StyledList>
    )
}


