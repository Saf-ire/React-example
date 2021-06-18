import React, { Component } from 'react';
import "./style/Badge.css";

class Badge extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="Badge m-5">
					<div className="Badge__header">
						<img src={this.props.header_img_url} alt="header_background" />
					</div>
					<div className="container mt-5 mb-1 Badge__userInfo">
						<div className="Badge__userImage">
							<img src={this.props.profile_picture_url} alt="Profile_picture" />
						</div>
						<div className="mt-5">
							<h4 className="text-center mt-5">{this.props.name}</h4>
							<p className="text-center">{this.props.title}</p>
						</div>
					</div>
					<div className="Badge__info container pt-3">
						<div className="row">
							<div className="col">
								<h4 className="text-center fw bold">{this.props.rank}</h4>
								<p className="text-center">Rank</p>
							</div>
							<div className="col">
								<h4 className="text-center fw bold">{this.props.level}</h4>
								<p className="text-center">Level</p>
							</div>
							<div className="col">
								<h4 className="text-center fw bold">{this.props.missions}</h4>
								<p className="text-center">Missions</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Badge;