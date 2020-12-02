import React from 'react';
import Searchbar from './SearchBar';
import axios from 'axios';
import ViewPhotos from './ViewPhoto';

class App extends React.Component {

    state = {
        images: []
    };

        handleservice = async (name) => {
            
            let methodName, tag;
            if(name != null){
                //call to search api
                methodName = 'flickr.photos.search';
                tag = name;
            }else{
                //call to getRecent api
                methodName = 'flickr.photos.getRecent';
                tag = null;
            }

            let url = 'https://www.flickr.com/services/rest/';
            const response = await axios.get(url,{
                    params: {
                        method: methodName,
                        tags: tag,
                        nojsoncallback: '1',
                        api_key: 'aba563342bc9dfbafb7bc237b8fbeca7',
                        format: 'json'
                    }
                });
                const res = response.data.photos.photo;
                if(res != null){  
                    this.setState({images: response.data.photos.photo});
                }
                else{
                    alert("Photos no available");
                }
            }

    render(){
        return (
            <div>
                <div className="ui sticky">
                    <Searchbar propHandleService={(e) => this.handleservice(e)}/>
                </div>
                <div className="ui center aligned container">                
                    <ViewPhotos handleImages={this.state.images}/>
                </div>
            </div>
        );
    }
}

export default App;