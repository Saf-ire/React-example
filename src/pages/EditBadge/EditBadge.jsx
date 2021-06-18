import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import BadgeForm from "../../components/BadgeForm"
import D_header from "../../images/badge_header.jpg"
import D_picture from "../../images/default_image.png"
import PageError from "../../components/PageError"
import Loader from '../../components/Loader'
import "../NewBadge/NewBadge.css"
import api from "../../libs/fetch"
import Footer from "../../components/Footer"

class EditBadge extends React.Component {

	state = {
		loading: false,
		error: null,
		form: {
			header_img_url: "",
			profile_picture_url: "",
			name: "",
			title: "",
			rank: "",
			level: "",
			missions: "",
		}
	}

	componentDidMount(){
		this.fetchData()
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null })
		try {
			const data = await api.badges.read(this.props.match.params.badgeId)
			this.setState({ loading: false, form: data })
		} catch (error) {
			this.setState({ loading: false, error: error })
		}
	}

	handleChange = event => {
		this.setState({
			form: {
				...this.state.form,
				[event.target.name]: event.target.value
			}
		})
	}

	handleSubmit = async (event) => {
		event.preventDefault()
		this.setState({ loading: true, error: null })

		try {
			await api.badges.update(this.props.match.params.badgeId, this.state.form)
			this.setState({ loading: false, error: null })
			this.props.history.push("/badges")
		} catch (error) {
			console.log(error)
			this.setState({ loading: false, error: error })
		}

	}

	render() {

		if(this.state.loading){
			return <Loader></Loader>
		}

		if(this.state.error){
			return <PageError error={this.state.error.message}></PageError>
		}

		return (
			<React.Fragment>
				<Hero h={"10vh"}></Hero>
				<div className="container">
					<div className="row">
						<div className="col">
							<Badge
								header_img_url={this.state.form.header_img_url || D_header}
								profile_picture_url={this.state.form.profile_picture_url || D_picture}
								name={this.state.form.name || "Hunter"}
								title={this.state.form.title || "Jagras"}
								rank={this.state.form.rank || "Low"}
								level={this.state.form.level || "1"}
								missions={this.state.form.missions || "0"}
							></Badge>
						</div>
						<div className="col">
							<BadgeForm
								onChange={this.handleChange}
								onSubmit={this.handleSubmit}
								formValues={this.state.form}>

							</BadgeForm>
						</div>
					</div>
				</div>
				<Footer s={{ position: "relative" }}></Footer>
			</React.Fragment>
		)
	}
}

export default EditBadge