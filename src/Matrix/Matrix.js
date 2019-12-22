import React, { Component } from 'react';
import './Matrix.css';
import Nav from '../Nav/Nav';
import VideoLink from '../VideoLink/VideoLink';
import axios from 'axios';

class Matrix extends Component {
	state = {
		videos: [],
		pageNumberCurrent: 1,
		pageNumberMaximum: 1,
		videosPerPage: 24
	};

	componentDidMount() {
		axios.get('http://oddworldlibrary.net/ebunce/VGToolbox/chaosvids.json')
			.then(response => {
				const numberOfPages = response.data.length;
				const videosThisPage = response.data.slice((this.state.pageNumberCurrent - 1) * this.state.videosPerPage, this.state.videosPerPage);
				this.setState( {
					videos: videosThisPage,
					pageNumberMaximum: numberOfPages
				} );
			}
		);
	}

  render() {

		const videos = this.state.videos.map(video => {
			return <VideoLink title={video.title} youtube={video.youtube} description={video.description} duration={video.durationDisplay} date={video.date} />;
		});

    return (
      <div className="Matrix">
				<Nav page={this.state.page} pageMax={this.state.pageMax} />
				<div className="MatrixLinks">
					{videos}
				</div>
      </div>
    );
  }
}

export default Matrix;
