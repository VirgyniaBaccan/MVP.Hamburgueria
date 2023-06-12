import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
:root {
	--color-primary: #27ae60ff;
	--color-secondary: #eb5757ff;
	--color-grey-600: #333333ff;
	--color-grey-300: #828282ff;
	--color-grey-100: #e0e0e0ff;
	--color-negative: #e60000ff;
	--color-warning: #ffcd07ff;
	--color-sucess: #168821ff;
	--color-information: #155bcbff;
}

body, html{
    width: 100vw;
    height: 100vh;
}

body {
	background-color: #ffff;
	-webkit-font-smoothing: antialiased;
	overflow-x: hidden;
}

body, input, button, textarea {
	font-family: 'Inter', sans-serif;
}

@media (min-width: 48rem) {
	main {
		display: flex;
		justify-content: center;
	}
}
`

