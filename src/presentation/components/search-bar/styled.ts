import { styled } from 'styled-components'

export const Container = styled.div`
	display: flex;
	width: 100%;
	padding: 32px;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.5);

	@media (max-width: 768px) {
		padding: 16px;
	}
	@media (max-width: 576px) {
		padding: 8px;
	}
`
export const FormContent = styled.form`
	display: flex;
	position: relative;
	gap: 8px;
	align-items: center;
	width: 100%;
	padding: 8px 16px;
	border-radius: 16px;
	background-color: rgba(0, 0, 0, 0.8);
`
export const Input = styled.input`
	width: 100%;
	background-color: transparent;
	font-size: 24px;
	color: #999999;
	outline: none;
	border: 0;
	&::placeholder {
		color: #999999;
		font-weight: normal;
	}

	@media (max-width: 768px) {
		font-size: 20px;
	}

	@media (max-width: 576px) {
		font-size: 16px;
	}
`
export const Button = styled.button`
	border: none;
	background-color: transparent;
	border-radius: 4px;
	color: #999999;
	font-size: 24px;
	display: flex;
	padding: 4px;
	cursor: pointer;
`
export const SearchResultContent = styled.div`
	position: absolute;
	top: 50px;
	left: 0;
	width: calc(100% - 16px);
	padding: 8px;
	background-color: rgba(255, 255, 255, 0.9);
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
	z-index: 2;
`
