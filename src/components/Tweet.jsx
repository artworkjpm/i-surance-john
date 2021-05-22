import React from "react";
import styled from "styled-components";
export default function Tweet(props) {
	const data = props.data;

	function addStyles(text) {
		let split = text.split(" ");
		let newText = split.map((item) => {
			if (item.includes("#")) {
				return <Hash>{item}</Hash>;
			} else if (item.includes("@")) {
				return <User>{item}</User>;
			} else if (item.includes("https://" || item.includes("http://"))) {
				return (
					<Link href={item} target="_blank">
						{item}
					</Link>
				);
			} else {
				return item;
			}
		});
		return newText.map((item, index) => {
			return (
				<span key={index}>
					<span>{item}</span>
					<span> </span>
				</span>
			);
		});
	}
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
					<div>{addStyles(data.text)}</div>
				</div>
			</TweetContainer>
		</div>
	);
}

const Hash = styled.span`
	color: green;
	font-weight: bold;
`;

const User = styled.span`
	color: red;
	font-weight: bold;
`;

const Link = styled.a`
	font-weight: bold;
`;

const TweetContainer = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	border: 2px green solid;
	margin: 10px;
	padding: 10px;
	border-radius: 35px;
	justify-content: flex-start;

	> div > div:nth-of-type(1) {
		font-size: 20px;
		margin-bottom: 5px;
	}  > div:nth-of-type(2) {
		line-height: 20px;
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
