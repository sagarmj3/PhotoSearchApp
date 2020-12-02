import React from 'react';
import Searchbar from './SearchBar';
import axios from 'axios';

class App extends React.Component {

    constructor(){
        super()

        this.handleservice = async (e) => {
            
            let url = 'https://www.flickr.com/services/rest/';
            await axios.get(url,{
                    params: {
                        method: 'flickr.photos.search',
                        name: e,
                        api_key: 'aba563342bc9dfbafb7bc237b8fbeca7',
                        format: 'json',
                        nojsoncallback:'1'
                    }
                }
            ).then((res) => {console.log(res)})
             .catch((e) => {console.log(e)});
            
        }
    }
    render(){
        return (
            <div>
                <div>
                    <Searchbar 
                        propHandleService={(e) => this.handleservice(e)}    
                    />
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default App;