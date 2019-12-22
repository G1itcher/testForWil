import React from 'react';
import './VideoLink.css';

const VideoLink = (props) => {
	return (
		<div className="videocard">
			<div className="videolink">
				<a href={"https://www.youtube.com/watch?v=" + props.youtube}>
					<img src={"https://img.youtube.com/vi/" + props.youtube + "/mqdefault.jpg"} alt="Thumbnail for this video" />
					<h1>{props.title}</h1>
					<p className="video-description">{props.description}</p>
					<p className="video-duration">{props.duration}</p>
					<p className="video-date">{props.date}</p>
				</a>
			</div>
		</div>
	)
};

export default VideoLink;