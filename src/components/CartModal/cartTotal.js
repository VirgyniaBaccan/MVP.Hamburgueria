import styled from "styled-components";

export const StyledBottonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    height: 6.5rem;
    border-top: .125rem solid #E0E0E0;
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
        color: #333333;
    }

    .cart__value {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #828282;
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
    background: #E0E0E0;
    border: .125rem solid #E0E0E0;
    border-radius: .5rem;
    margin-top: 15px;

    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: var(--color-grey-300);

    :hover {
        background: var(--color-primary);
        color: #ffff;
        border: .125rem solid var(--color-primary);
    }
    `