import styled from 'styled-components';

const PostStyled = styled.div`
	background-color: white;
    border-radius: 3px;
    border: 1px solid #EBEBEB;
    padding: 15px;
    width: min-content;
    min-width: 40vw;
    margin: 10px 0;
	a{
		text-decoration: none;
		color: black;
		
		&:visited{
			color: lightgray;
		}
	}
    .post-reputation{
        font-size: 0.7rem;
        font-weight: bold;
    }
    .post-info{
        font-size: 0.8rem;
        color: grey;
        margin-left: 10px;
    }
    .post-body{
        margin: 10px 0;
    }
    .post-btn-comment{
        text-decoration: none;
        color: grey;
        font-size: 0.7rem;
        padding: 5px;
        border-radius: 3px;
        &:hover{
            background-color: lightgrey;
        }
    }
    
    @media all and (max-width: 767px) {
		width: auto;
	}
`;

export default PostStyled;
