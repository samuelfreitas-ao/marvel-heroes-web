import { styled } from 'styled-components'

export const Container = styled.li`
	position: relative;
	display: flex;
	min-height: 100px;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
	cursor: pointer;

	&:hover {
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
	}
`
export const ImageContainer = styled.div`
	position: relative;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > :not(img) {
		position: absolute;
		z-index: 1;
		color: #666;
	}
`
export const ItemImage = styled.img<{ unavailable?: string }>`
	opacity: ${(props) => (props?.unavailable ? 0.6 : 0.8)};
	width: 100%;
`
export const ItemTitle = styled.div`
	background-color: rgba(90, 126, 118, 0.8);
	color: #fff;
	font-size: 24px;
	position: absolute;
	bottom: 0;
	width: 100%;

	@media (max-width: 768px) {
		font-size: 20px;
	}

	@media (max-width: 576px) {
		font-size: 16px;
	}
`
