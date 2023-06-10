import styled from "styled-components";

export const StyledLoader = styled.div`
border: 8px solid #f3f3f3; 
  border-top: 8px solid var(--color-primary);
  border-radius: 50%;
  width: 60px;
  height: 60px;
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
  width: 300px;
  height: 346px;
  flex-basis: 300px;
  flex-shrink: 0;
  background: #FFFFFF;
  border: 2px solid var(--color-grey-100);
  border-radius: 5px;
  
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
  width: 156px;
  height: 156px;
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
  font-size: 18px;
  line-height: 24px;
  color: #333333;
}

.product__category {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #828282;
}

.product__price {
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: var(--color-primary);
}

.product__button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  width: 106px;
  height: 40px;

  background: var(--color-grey-100);
  border: 2px solid var(--color-grey-100);
  border-radius: 8px;

  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;

  letter-spacing: 0.8px;
}
`