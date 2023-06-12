import styled from "styled-components";

export const StyledForm = styled.form`
    position: relative;
    width: 100%;
    height: 3.75rem;

button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0rem 1.25rem;
    gap: .625rem;

    width: 3.3125rem;
    height: 2.5rem;

    background: var(--color-primary);
    border: .125rem solid var(--color-primary);
    border-radius: .5rem;
    position: absolute;
    top: 16%; 
    right: 4%;
}

@media (min-width: 48rem) {
    width: 22.8125rem;
}
`