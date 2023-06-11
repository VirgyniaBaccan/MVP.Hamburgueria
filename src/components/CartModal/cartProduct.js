import styled from "styled-components";

export const StyledProduct = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5rem;
    gap: 8px;
`
export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 4rem;
    background: #E0E0E0;
    border-radius: 5px;
`
export const StyledImage = styled.img`
    width: 3.4375rem;
    height: 3rem;
    background: #E0E0E0;
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
        font-size: 18px;
        line-height: 100%;
        color: #333333;
    }

    .button__deleteProduct {
        width: 12px;
        height: 14px;
    }   
`
