import React from 'react';
import PropTypes from 'prop-types';
import  '../css/Popup.css';

class Popup extends React.Component{
    render(){
        return(
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">{this.props.title}</h4>
                        </div>
                            <div className="modal-body">
                            <p dangerouslySetInnerHTML={{__html: this.props.description}}></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Popup.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Popup;