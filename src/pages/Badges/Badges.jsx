import React from "react"
import SkeletonItem from "../../components/Skeleton"
import BadgesList from "../../components/BadgesList"
import PageError from "../../components/PageError"
import api from "../../libs/fetch"
import "./Badges.css"

class Badges extends React.Component{

	state={
		loading: true,
		error: null,
		data: undefined,
		handle_footer: {bottom:0},
	}
	
	componentDidMount(){
		this.fetchData()
		if(this.state.data){
			this.setFetchInterval()
		}
	}
	
	fetchData = async() => {
		this.setState({loading: true, error: null})
		try{
			const data = await api.badges.list()
			data.reverse()
			this.setState({loading: false, data: data})
			
			if(data.length > 3){
				this.setState({handle_footer:{position:"relative"}})
			}else{
				this.setState({handle_footer:{bottom: 0}})
			}

		}catch(error){
			this.setState({loading: false, error: error})
		}
	}
	
	setFetchInterval(){
		this.interval = setInterval(this.fetchData, 3000)
	}

	componentWillUnmount(){
		clearInterval(this.interval)
	}


	render(){
		if(this.state.loading===true && !this.state.data){
			return <SkeletonItem></SkeletonItem>
		}

		if(this.state.error){
			return <PageError error={this.state.error.message}></PageError>
		}

		return(
			<React.Fragment>
			{/*<div className="Badges__container">
					<div className="Badges__button">
						<Button
							theme={"Button-light"}
							contentText={"New Badge"}
							link={"/new"}
						></Button>
					</div>
				</div>*/}
				<BadgesList badges={this.state.data}></BadgesList>
				{/*<Footer s={this.state.handle_footer}></Footer>*/}
			</React.Fragment>
		)
	}
}

export default Badges