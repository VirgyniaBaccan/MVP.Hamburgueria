import styled from "styled-components";

export const StyledProduct = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5rem;
    gap: .5rem;
`
export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 4rem;
    background: var(--color-grey-100);
    border-radius: .3125rem;
`
export const StyledImage = styled.img`
    width: 3.4375rem;
    height: 3rem;
    background: var(--color-grey-100);
`
export const StyledProductDiv = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .product__name {
        display: flex;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 100%;
        color: var(--color-grey-600);
    }

    .button__deleteProduct {
        width: .75rem;
        height: .875rem;
    }   
`
