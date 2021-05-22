import React from "react";
import styled from "styled-components";

export default function About() {
	return (
		<Container>
			<h1>About this app</h1>
			<p>It took me a while to get the Twitter API working, this was probably my biggest challenge! Once working I worked through the requirements and the extra points</p>
			<ul>
				<li>
					API calls must be done via actions - <i>Done with Thunk</i>{" "}
				</li>
				<li>
					It must be responsive - <i>Done without media query actually, but yes, its responsive to a max-width for desktop and 100% for below 600px</i>
				</li>
				<li>
					In the top of the app we need a text input to search tweets about a topic, this input will start the search automatically, but only after user stops typing in a natural way.{" "}
					<i>
						Done with RXJS <code>debounceTime(600), distinctUntilChanged(), tap()</code>{" "}
					</i>
				</li>
				<li>
					The app must display a feed (tweets list) of tweets in Spanish with topic #hulk by default.{" "}
					<i>
						Done using <code>&lang=es</code> in the endpoint url
					</i>
				</li>
				<li>
					The app must prevent empty feed cases displaying some kind of placeholder <i>I display a message when there are no results in the search, "No Tweets found, try amending your search"</i>
				</li>
				<li>
					Each tweet must display the avatar of this creator, his name and the text whit different color or style for mentions of users and hashtags <i>Done</i>
				</li>
			</ul>

			<h2>Extra points:</h2>
			<ul>
				<li>
					Use of Redux (thunk / Redux Saga / redux-observable) or MobX. <i>I'm using Redux and Thunk, inside the thunk I'm using RXJS ajax</i>{" "}
				</li>
				<li>
					Demonstrate domain of RxJs <i>As mentioned above I used RXJS to control the natural search typing</i>
				</li>

				<li>
					Use infinite scroll in the list to show tweets <i>I used infinite scroll but twitter only allows you 100 tweets per search maximum</i>{" "}
				</li>

				<li>
					Use functional components as much as you can <i>They are all functional components and react hooks</i>
				</li>

				<li>
					Test with jest Style using styled-components with polished and/or flex-box. <i>Ok I need to do this. </i>{" "}
				</li>
				<li>
					Demonstrate domain of ES6 with good praxis without any killer like flow or typescript Avoid to use binded or arrow functions inside renders <i>I didn't use Typescript but I an use that no worries. </i>
				</li>
			</ul>

			<h2>Conclusion</h2>
			<p>It was a fun and challenging test to make, I never used that site "https://private-cors-server.herokuapp.com" before to fake a proxy to get around the CORS issue. </p>
			<p>I'm interested in working for you and can start immediately. Hablo Castellano también.</p>
			<p>I hope to get some feedback</p>
			<p>
				Regards, John Moran: 695966706,{" "}
				<a href="https://jpm.netlify.app" target="_blank" rel="noreferrer">
					https://jpm.netlify.app
				</a>
			</p>
		</Container>
	);
}

const Container = styled.div`
	color: white;
	line-height: 30px;
	font-size: 18px;
	background-color: black;
	padding: 20px;
	margin-top: 20px;

	h1 {
		margin-top: 0;
	}

	> ul > li {
		color: #b7b7b7;
		i {
			color: white;
		}
	}
	a {
		color: white;
	}
`;
