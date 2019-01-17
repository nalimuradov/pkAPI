import React from "react";

class Pkmn extends React.Component {
	render(){
		return (
			<div className="container">
				<div className="row">
					<div className='col-m-6'>
						<object><img src={this.props.pk1Img} alt=''/></object>
						<p className='pkmn__value'>{this.props.pk1}</p>
						<object><img src={this.props.pk2Img} alt=''/></object>
						<p className='pkmn__value'>{this.props.pk2}</p>
						<object><img src={this.props.pk3Img} alt=''/></object>
						<p className='pkmn__value'>{this.props.pk3}</p>
					</div>
					<div className='col-m-6'>
						<object><img id='nope' src={this.props.pk4Img} alt=''/></object>
						<p className='pkmn__value'>{this.props.pk4}</p>
						<object><img src={this.props.pk5Img} alt=''/></object>
						<p className='pkmn__value'>{this.props.pk5}</p>
						<object><img src={this.props.pk6Img} alt=''/></object>
						<p className='pkmn__value'>{this.props.pk6}</p>
					</div>
				</div>
				
				
				

			</div>
		);
	}
};

export default Pkmn;