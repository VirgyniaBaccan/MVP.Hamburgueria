import Logo from '../../assets/Logo.svg'
import Cart from '../../assets/Cart.svg'
import Search from '../../assets/Search-Icon.svg'
import { StyledDiv, StyledHeader } from './header'
import { StyledSearchInput } from './InputSearch/input.js'
import { StyledForm } from './form'

export const Header = ({ setInputSearch, setIsOpen, count, setCount }) => {

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <StyledHeader>
            <div className='header__container'>
                <div className='div__logo'>
                    <img src={Logo} alt="Logo da Hamburgueria da Kenzie" />
                    <StyledDiv>
                        <img className='img__cart' onClick={() => setIsOpen("true")} src={Cart} alt="Carrinho de compras cinza" />
                        <p>{count}</p>
                    </StyledDiv>
                </div>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledSearchInput type='text'
                        placeholder='Digitar pesquisa'
                        onChange={(event) => setInputSearch(event.target.value)}
                    />
                    <button type='submit'><img src={Search} /></button>
                </StyledForm>
            </div>
        </StyledHeader>
    )
}
