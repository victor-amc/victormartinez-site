import styled from "@emotion/styled";

//css notes
// flex justify content: https://www.w3schools.com/cssref/playit.asp?filename=playcss_justify-content&preval=flex-start
// flex align items: https://www.w3schools.com/cssref/playit.asp?filename=playcss_align-items&preval=stretch

export const Container = styled.div`
	width: min(80%, 1200px);
	position: relative;
	display: flex;
	align-items: center;
`;

export const SectionContainer = styled.div(
	(props) => `
		background-color: ${
			props.bgColor ? props.bgColor : "var(--back-primary-color)"
		};
		color: ${props.color ? props.color : "var(--fore-primary-color)"};
		width: ${props.width ? props.width : "auto"};
		height: ${props.height ? props.height : "auto"};
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
`
);

export const VerticalContainerWidth = styled.div(
	(props) => `
	width: min(80%, ${props.maxWidth ? props.maxWidth : "1200px"});
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`
);

export const VerticalContainer = styled(Container)`
	flex-direction: column;
	justify-content: center;
`;

export const ColumnsContainer = styled(Container)`
	flex-direction: row;
	justify-content: space-between;
`;
