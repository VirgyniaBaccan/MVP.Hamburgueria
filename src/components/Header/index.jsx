import Logo from '../../assets/Logo.svg'
import Cart from '../../assets/Cart.svg'
import Search from '../../assets/Search-Icon.svg'
import { StyledHeader } from './header'
import { useState } from 'react'
// import { SearchInput } from './InputSearch'

export const Header = ({setInputSearch}) => {


    console.log("header")
    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log("enter", inputSearch)

    }

    return (
        <StyledHeader>
            <div>
                <img src={Logo} alt="Logo da Hamburgueria da Kenzie" />
                <img src={Cart} alt="Carrinho de compras cinza" />
            </div>
            <form onSubmit={handleSubmit}>
                <input type='text'
                    placeholder='Digitar pesquisa'
                    onChange={(event) => setInputSearch(event.target.value)}
                />
                <button type='submit'><img src={Search} /></button>
            </form>
        </StyledHeader>
    )
}
