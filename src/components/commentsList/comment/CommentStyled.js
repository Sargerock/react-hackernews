import styled from 'styled-components';

export default styled.div`
	margin-left: ${({ margin }) => margin || 30}px;
	font-size: 12px;
	overflow: hidden;

	.header {
		margin-top: 30px;
		color: lightslategray;
	}

	@media screen and (max-width: 768px) {
		margin-left: ${({ margin }) => margin / 3 || 10}px;
		.header {
			margin-top: 20px;
		}
	}
`;
