import React from 'react';

class SearchBar extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            name: ''
        }
        this.handleOnChange = (e) => {
            this.setState({name: e.target.value})
        }
    }

    render() {

        return (
            
            <div className="ui container" style={{marginTop:'30px'}} >
                <div className="ui segment">
                    <form onSubmit={() => this.props.propHandleService(this.state.name)}>
                        <div className="ui fluid input">
                            <input placeholder="Enter any keyword" 
                                onChange={(e) => {this.handleOnChange(e)}}/>
                        </div>
                    </form>
                </div>
            </div>
        
        );
    }
}

export default SearchBar;