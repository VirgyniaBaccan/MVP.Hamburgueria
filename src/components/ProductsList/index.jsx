import { Product } from "./Product"
import { StyledList } from "./list"

export const List = ({filteredProducts, setProducts, cartList, setListCart, count, setCount}) => {
    return (
        <StyledList>
            <Product filteredProducts={filteredProducts} setProducts={setProducts} cartList={cartList} setListCart={setListCart} count={count} setCount={setCount}/>
        </StyledList>
    )
}


