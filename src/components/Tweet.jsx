import React from "react";
import styled from "styled-components";
export default function Tweet(props) {
	const data = props.data;
	return (
		<div>
			<TweetContainer>
				<ImgCircle>
					<img src={data.user.profile_image_url} alt={data.user.name} />
				</ImgCircle>
				<div>
					<div>
						<b>{data.user.name}</b>
					</div>

					<div>{data.text}</div>
				</div>
			</TweetContainer>
		</div>
	);
}

const TweetContainer = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	border: 2px green solid;
	margin: 10px;
	padding: 10px;
	border-radius: 35px;

	> div > div:nth-of-type(1) {
		font-size: 20px;
	}
`;

const ImgCircle = styled.div`
	display: inline-block;
	position: relative;
	width: 50px;
	height: 50px;
	overflow: hidden;
	border-radius: 50%;
	margin-right: 10px;
	img {
		width: auto;
		height: 100%;
	}
`;
