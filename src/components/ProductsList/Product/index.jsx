import axios from "axios"
import { useState, useEffect } from "react"
import { StyledLoader, StyledProduct } from "./styles"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Product = ({ filteredProducts, setProducts, cartList, setListCart, count, setCount }) => {

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

    const handleListCart = (product) => {
        const checkProduct = cartList.find((element) => element.id == product.id)
        if (checkProduct) {
            toast.error('Este produto já foi adicionado ao carrinho', { autoClose: 1000 })
        } else {
            setListCart((currentCartList) => [...currentCartList, product])
            setCount((currentCount) => currentCount +1)
        }
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
                                <p className="product__price">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                <button className="product__button" onClick={() => { handleListCart(product) }}>Adicionar</button>
                                <ToastContainer />
                            </div>
                        </StyledProduct>)
            }
        </>
    )
}