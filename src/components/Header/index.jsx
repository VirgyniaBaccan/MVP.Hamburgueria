import Logo from '../../assets/Logo.svg'
import Cart from '../../assets/Cart.svg'
import Search from '../../assets/Search-Icon.svg'
import { StyledHeader } from './header'
import { StyledSearchInput } from './InputSearch/input.js'
import { StyledForm } from './form'

export const Header = ({setInputSearch, setIsOpen}) => {
    
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <StyledHeader>
            <div className='div__logo'>
                <img src={Logo} alt="Logo da Hamburgueria da Kenzie" />
                <img onClick={() => setIsOpen("true")} src={Cart} alt="Carrinho de compras cinza" />
            </div>
            <StyledForm onSubmit={handleSubmit}>
                <StyledSearchInput type='text'
                    placeholder='Digitar pesquisa'
                    onChange={(event) => setInputSearch(event.target.value)}
                />
                <button type='submit'><img src={Search} /></button>
            </StyledForm>
        </StyledHeader>
    )
}
