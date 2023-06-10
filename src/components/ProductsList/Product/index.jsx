import axios from "axios"
import { useState, useEffect } from "react"
import { StyledLoader, StyledProduct } from "./styles"


export const Product = ({ filteredProducts, setProducts, cartList, setListCart }) => {

    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
                setProducts(response.data)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }

        }

        getProducts()

    }, [])

    useEffect(() => {
        console.log(cartList)
    }, [cartList])

    const handleListCart = (product) => {
        const checkProduct = cartList.find((element) => element.id == product.id)
        if (checkProduct) {
            alert('já existe')
        } else {
            setListCart((currentCartList) => [...currentCartList, product])
        }
        // checkProduct ? alert('Já existe') : setCartList((cartList) => [...cartList, product])
    }


    return (
        <>
            {
                isLoading ?

                    <StyledLoader></StyledLoader> :
                    filteredProducts.map((product) =>
                        <StyledProduct key={product.id}>
                            <div className="div__img">
                            <img src={product.img} />
                            </div>
                            <div className="div__card">
                            <h2 className="product__name">{product.name}</h2>
                            <p className="product__category">{product.category}</p>
                            <p className="product__price">{product.price.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</p>
                            <button className="product__button" onClick={() => { handleListCart(product) }}>Adicionar</button>
                            </div>
                        </StyledProduct>)
            }
        </>
    )
}