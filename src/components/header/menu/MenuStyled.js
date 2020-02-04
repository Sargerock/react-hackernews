import styled from 'styled-components';

const MenuStyled = styled.button`
	display: none;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	border: 2px solid #ff8f35;
	border-radius: 4px;
	width: 35px;
	height: 35px;

	span {
		background-color: #ff8f35;
		width: 20px;
		height: 3px;
		margin: 2px;
	}

	@media screen and (max-width: 768px) {
		display: flex;
	}
`;

export default MenuStyled;
