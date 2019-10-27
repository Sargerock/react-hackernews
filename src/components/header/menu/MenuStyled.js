import styled from 'styled-components';

const MenuStyled = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	border: 2px solid #FF8F35;
	border-radius: 4px;
	width: 35px;
	height: 35px;
	
	span {
		background-color: #FF8F35;
		width: 20px;
		height: 3px;
		margin: 2px;
	}
`;

export default MenuStyled;