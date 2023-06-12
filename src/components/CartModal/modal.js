import styled from "styled-components";

export const StyledModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;

.modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1.875rem;
    width: 80%;
    max-width: 31.25rem;
    height: 25rem;
    margin: 1rem;
    position: absolute;
    border-radius: .3125rem .3125rem 0rem 0rem;
    background: #FFFFFF;
    z-index: 1000;
}

.cart__top-div {
    display: flex;
    align-items: center;
    padding: .8125rem 1.375rem;
    justify-content: space-between;
    width: 100%;
    height: 3.375rem;
    background: var(--color-primary);
    border-radius: .3125rem .3125rem 0rem 0rem;
}

.cart__title {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #FFFFFF;
}

.close__button {
    width: .6794rem;
    height: .8044rem;
    color: rgba(255, 255, 255, 0.5);
}

.cart__list {
    display: flex;
    flex-direction: column;
    gap: .3125rem;
    padding: 1rem;
    padding-top: 0rem;
    width: 100%;    
    height: 10rem;
    margin-bottom: .0625rem solid var(--color-grey-100);
    overflow-y: auto;
}
`
