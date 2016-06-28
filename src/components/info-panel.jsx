var React = require('react');

var PlusOneButton = require( './gplus-one-button.jsx' ),
	// FacebookLikeButton = require( './facebook-like-button.jsx' ),
	Settings = require( './settings' ).default;

import { toggleShowQuotes, hideInfoPanel, resetHiddenQuotes } from '../store/actions';
import { connect } from 'react-redux';

var InfoPanel = React.createClass({
	render: function() {
		return (
			<div className='nfe-info-panel'>
			<div className='nfe-info-col'>
				<h1>Rap News Feed</h1>
				<a href="#"
					title="Close information panel"
					className="nfe-close-button"
					onClick={ this.props.hideInfoPanel }>X</a>

				<hr/>

				<h2>Contribute</h2>

				<p>
					If you have any ideas for quotes, please tweet them to <a href="https://twitter.com/ItsMayho"> @ItsMayho</a>
				</p>
				<p>
					Rap News Feed is open source. <a href="https://github.com/Mayho/rap-news-feed">Fork on Github</a>
				</p>
				<hr/>

			</div>
			</div>
		);
	}
});

const mapStateToProps = ( state ) => ( {} );

const mapDispatchToProps = ( dispatch ) => ( {
	hideInfoPanel: () => dispatch( hideInfoPanel() ),
} );

module.exports = connect( mapStateToProps, mapDispatchToProps )( InfoPanel );
