import styled from "styled-components";

export const StyledBottonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    height: 6.5rem;
    border-top: .125rem solid  var(--color-grey-100);
`

export const StyledTotalDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-top: 1.25rem;
    padding: 0.6rem;

    .cart__total {
        font-weight: 600;
        font-size: .875rem;
        line-height: 1.5rem;
        color:  var(--color-grey-600);
    }

    .cart__value {
        font-weight: 600;
        font-size: .875rem;
        line-height: 1.5rem;
        color: var(--color-grey-300);
    }
`
    export const StyledCartButton = styled.button`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0rem 1.25rem;
    gap: .625rem;
    width: 100%;
    height: 3.75rem;
    background: var(--color-grey-100);
    border: .125rem solid var(--color-grey-100);
    border-radius: .5rem;
    margin-top: .9375rem;

    font-weight: 600;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: var(--color-grey-300);

    :hover {
        background: var(--color-primary);
        color: #ffff;
        border: .125rem solid var(--color-primary);
    }
    `