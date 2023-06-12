import styled from "styled-components";

export const StyledLoader = styled.div`
border: .5rem solid #f3f3f3; 
  border-top: .5rem solid var(--color-primary);
  border-radius: 50%;
  width: 3.75rem;
  height: 3.75rem;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  margin-top: 30%;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`

export const StyledProduct = styled.li`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 18.75rem;
  height: 21.625rem;
  flex-basis: 18.75rem;
  flex-shrink: 0;
  background: #FFFFFF;
  border: .125rem solid var(--color-grey-100);
  border-radius: .3125rem;

  :hover {
    border: .125rem solid var(--color-primary);
  }
  
.div__img {
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: center;
  background-color: #f5f5f5;
}

.div__img > img {
  display: flex;
  align-self: center;
  width: 9.75rem;
  height: 9.75rem;
  background-color: #f5f5f5;
}

.div__card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
  padding: 1rem;
}

.product__name {
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: var(--color-grey-600);
}

.product__category {
  font-style: normal;
  font-weight: 400;
  font-size: .75rem;
  line-height: 1rem;
  color: var(--color-grey-300);
}

.product__price {
  font-weight: 600;
  font-size: .875rem;
  line-height: 1.5rem;
  color: var(--color-primary);
}

.product__button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem 1.25rem;
  gap: .625rem;
  width: 6.625rem;
  height: 2.5rem;

  background: var(--color-grey-100);
  border: .125rem solid var(--color-grey-100);
  border-radius: .5rem;

  font-weight: 600;
  font-size: .875rem;
  line-height: 1.0625rem;
  color: #FFFFFF;

  letter-spacing: .05rem;
}

.product__button:hover {
  background: var(--color-primary);
  color: #FFFFFF;
  border: .125rem solid var(--color-primary);
}
`
