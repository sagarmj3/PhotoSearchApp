import React, { Component } from 'react';

//this Component is for search bar 
class SearchBar extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            name: ''
        }
        this.handleOnChange = (e) => {
            this.setState({name: e.target.value})
        }
        this.handleOnSubmit = (e) => {
            e.preventDefault();

            this.props.propHandleService(this.state.name);
        }
    }

    render() {

        return (
            
            <div className="ui  container" style={{marginTop:'30px'}} >
                <div className="ui center aligned segment">
                    <form onSubmit={(e) => this.handleOnSubmit(e)}>
                    <div className="ui form">
                        <div className="field">
                            <label>Flickr Search</label>
                            <input placeholder="Enter any keyword" onChange={(e) => {this.handleOnChange(e)}}/>
                        </div>
                    </div>
                    </form>
                    <div style={{marginTop: '10px'}}>
                        <h5>Recent Searches</h5>
                            <button onClick={(e) => this.props.propHandleService()} className="ui button">Recent search</button>
                    </div>
                </div>
                
            </div>
        
        );
    }
}

export default SearchBar;