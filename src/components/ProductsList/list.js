import styled from "styled-components";

export const StyledList = styled.ul`
    display: flex;
    justify-content: space-between;
    overflow-y: auto;
    align-items: center;
    gap: 1.25rem;
    width: 100%;
    height: 25.625rem;
    padding: 1rem;

    @media (min-width: 48rem) {
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow: none;
    gap: 2.1875rem;
    width: 90%;
    max-width: 85.5rem;
    height: 100%;
    }
    `
