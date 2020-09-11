import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 40px;
`;

const ImageCard = styled.div`
	background: url(https://picsum.photos/200/400);
	height: 400px;
	width: 200px;
	margin: 8px;
`;

const ShowAllPage = () => {
	return (
		<Container>
			<ImageCard />
			<ImageCard />
			<ImageCard />
			<ImageCard />
			<ImageCard />
			<ImageCard />
			<ImageCard />
			<ImageCard />
			<ImageCard />
		</Container>
	);
};

export default ShowAllPage;
