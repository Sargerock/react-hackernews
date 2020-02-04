import styled from 'styled-components';

const HeaderStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background-color: white;
	border-bottom: 3px solid #ebebeb;
	width: 100%;
	padding: 0 5px;
	position: sticky;
	top: 0;
	left: 0;
	height: 80px;

	& > :last-child {
		margin-left: auto;
	}

	@media screen and (max-width: 768px) {
		height: 60px;
		border-bottom: none;
	}
`;

export default HeaderStyled;
