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
    justify-content: center;
    position: absolute;
    width: 80%;
    max-width: 500px;
    margin: 1rem;
    height: 25.6875rem;
    background: #FFFFFF;
    z-index: 1000;
}

`