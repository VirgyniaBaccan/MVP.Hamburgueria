import styled from "styled-components";

export const StyledForm = styled.form`
    position: relative;
    width: 100%;
    height: 60px;

button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;

    width: 53px;
    height: 40px;

    background: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 8px;
    position: absolute;
    top: 16%; 
    right: 4%;
}

`