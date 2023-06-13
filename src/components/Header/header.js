import styled from "styled-components"

export const StyledHeader = styled.header`

    display: flex;
    flex-direction: column;
    position: sticky;
    width: 100%;
    max-width: 100vw;
    height: 9.5rem;
    top: 0rem;
    padding: 1.5rem;
    gap: 2rem;
    background: #F5F5F5;

.div__logo {
    display: flex;
    justify-content: space-between;
}

.img__cart {
    width: 1.5625rem;
    margin-right: 1.25rem;
}

.header__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

@media (min-width: 48rem) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;

    .div__logo {
        width: 100%;
    }

    img {
        width: 9.375rem;
        height: 1.4281rem;
        cursor: pointer;
    }

    .header__container {
        width: 100%;
        flex-direction: row;
        align-items: center;
        max-width: 84rem;
    }
}
`
export const StyledDiv = styled.div`

    display: flex;
    position: relative;
    margin-right: .625rem;

    p {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 1rem;
    height: 1.125rem;
    top: -46%;
    right: 27%;
    background: var(--color-primary);
    color: #FFFF;
    border-radius: .375rem;
    padding: .4375rem;

    font-style: normal;
    font-weight: 900;
    font-size: 0.775rem;
    }
    
`