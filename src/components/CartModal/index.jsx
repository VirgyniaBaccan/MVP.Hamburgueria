// import { useRef, useEffect } from "react";
import { StyledModal } from "./modal";
import { useOutCLick } from "../../hooks/useOutClick";
import { useKeyDown } from "../../hooks/useKeyDown";
import DeleteIcon from "../../assets/Delete-Icon.svg"

export const Modal = ({ setIsOpen, cartList, setListCart }) => {

    const modalRef = useOutCLick(() => {
        setIsOpen(false)
    })

    const buttonRef = useKeyDown("Escape", (element) => {
        element.click()
    })

    const sum = cartList.reduce((acc, element) => acc += element.price, 0)

    const deleteProduct = (elementId) => {
        setListCart((cartList) => cartList.filter((product) => elementId !== product.id)
        )
    }

    const clearList = () => {
        setListCart([])
    }

return (
    <StyledModal role="dialog">
        <div className="modal" ref={modalRef}>
            <div>
                <h2>Carrinho de compras</h2>
                <button ref={buttonRef} onClick={() => setIsOpen(false)}>X</button>
            </div>
            <ul>
                {cartList.map((product) =>
                    <li key={product.id}>
                        <img src={product.img} />
                        <div>
                            <h2>{product.name}</h2>
                            <img src={DeleteIcon} onClick={() => { deleteProduct(product.id) }} />
                        </div>
                    </li>
                )}
            </ul>
            <div>
                <div>
                    <h3>Total</h3>
                    <h3>{sum.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h3>
                </div>
                <button onClick={() => clearList()}>Remover todos</button>
            </div>
        </div>
    </StyledModal>
);
}