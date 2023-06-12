import styled from "styled-components";

export const StyledSearchInput = styled.input`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0rem .625rem 0rem .9375rem;

    width: 100%;
    height: 3.75rem;
    background: #FFFFFF;
    border: .125rem solid var(--color-grey-100);
    border-radius: .5rem;

    @media (min-width: 48rem) {
        width: 100%;
        height: 3.75rem;
    }
`