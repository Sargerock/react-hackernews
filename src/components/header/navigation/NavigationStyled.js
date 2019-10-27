import styled from 'styled-components';

const NavigationStyled = styled.nav`
	.nav-link {
        margin: 0 10px;
        color: gray;
        text-decoration: none;
        &.active {
            color: black;
            font-weight: bold;
        }
    }
    
    @media(max-width: 768px){
    	display: none;
    }
`;

export default NavigationStyled;