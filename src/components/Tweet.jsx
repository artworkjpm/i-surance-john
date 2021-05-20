import React from "react";
import styled from "styled-components";
export default function Tweet(props) {
	const data = props.data;
	return (
		<div>
			<TweetContainer>
				<ImgCircle>
					<img src={data.user.profile_image_url} alt="" />
				</ImgCircle>
				<div>{data.user.name}</div>
			</TweetContainer>
		</div>
	);
}

const TweetContainer = styled.div`
	display: flex;
`;

const ImgCircle = styled.div`
	position: relative;

	overflow: hidden;
	border-radius: 50%;

	img {
		width: 100%;
		height: auto;
	}
`;
