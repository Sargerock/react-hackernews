import styled from 'styled-components';

const HeaderStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background-color: white;
	border-bottom: 3px solid #EBEBEB;
    width: 100%;
    padding: 0 5px;
    position: sticky;
    top: 0;
    left: 0;
    height: 80px;
    
	&> * {
		margin: 0 10px;
	}
    &> :last-child {
    	margin-left: auto;
    }
`;

export default HeaderStyled;