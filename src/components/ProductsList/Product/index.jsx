import axios from "axios"
import { useState, useEffect } from "react"
import { StyledLoader } from "./styles"

export const Product = ({filteredProducts, setProducts}) => {
    
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

    return (
        <>
                {
                    isLoading ?
                        <StyledLoader></StyledLoader> :
                        filteredProducts.map((product) => <li key={product.id}>
                            <img src={product.img}/>
                            <h2>{product.name}</h2>
                            <p>{product.category}</p>
                            <p>{product.price}</p>
                            <button>Adicionar</button>

                            </li>)
                }
        </>
    )
}
