import styled from 'styled-components';

const NavigationStyled = styled.nav`
	transition: all 0.2s;
	overflow: hidden;
	.nav-link {
		margin: 0 10px;
		color: gray;
		text-decoration: none;
		&.active {
			color: black;
			font-weight: bold;
		}
	}

	@media (max-width: 768px) {
		display: flex;
		justify-content: space-around;
		position: fixed;
		top: 60px;
		left: -5px;
		margin: 0;
		width: 103%;
		background-color: white;
		border-bottom: 3px solid #ebebeb;
		height: ${({ visible }) => (visible ? 20 : 0)}px;
	}
`;

export default NavigationStyled;
