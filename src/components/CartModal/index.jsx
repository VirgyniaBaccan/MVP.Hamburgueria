import { StyledModal } from "./modal";
import { useOutCLick } from "../../hooks/useOutClick";
import { useKeyDown } from "../../hooks/useKeyDown";
import DeleteIcon from "../../assets/Delete-Icon.svg"
import { StyledDiv, StyledImage, StyledProductDiv, StyledProduct } from "./cartProduct";
import { StyledBottonDiv, StyledTotalDiv, StyledCartButton } from "./cartTotal";

export const Modal = ({ setIsOpen, cartList, setListCart, setCount }) => {

    const modalRef = useOutCLick(() => {
        setIsOpen(false)
    })

    const buttonRef = useKeyDown("Escape", (element) => {
        element.click()
    })

    const sum = cartList.reduce((acc, element) => acc += element.price, 0)

    const deleteProduct = (elementId) => {
        setListCart((cartList) => cartList.filter((product) => elementId !== product.id))
        setCount((currentCount) => currentCount - 1)
    }

    const clearList = () => {
        setListCart([])
        setCount(0)
    }

    return (
        <StyledModal role="dialog">
            <div className="modal" ref={modalRef}>
                <div className="cart__top-div">
                    <h2 className="cart__title">Carrinho de compras</h2>
                    <button className="close__button" ref={buttonRef} onClick={() => setIsOpen(false)}>X</button>
                </div>
                <ul className="cart__list">
                    {cartList.length == 0 ? <li className="cart__empty-text">Seu carrinho ainda está vazio</li>
                        : cartList.map((product) =>
                            <StyledProduct key={product.id}>
                                <StyledDiv>
                                    <StyledImage src={product.img} />
                                </StyledDiv>
                                <StyledProductDiv>
                                    <h2 className="product__name">{product.name}</h2>
                                    <img className="button__deleteProduct" src={DeleteIcon} onClick={() => { deleteProduct(product.id) }} />
                                </StyledProductDiv>
                            </StyledProduct>
                        )}
                </ul>
                <StyledBottonDiv>
                    <StyledTotalDiv>
                        <h3 className="cart__total">Total</h3>
                        <h3 className="cart__value">{sum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                    </StyledTotalDiv>
                    <StyledCartButton onClick={() => clearList()}>Remover todos</StyledCartButton>
                </StyledBottonDiv>
            </div>
        </StyledModal>
    );
}