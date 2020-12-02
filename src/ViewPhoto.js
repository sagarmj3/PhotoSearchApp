import React from 'react';

//This component is to display the photo
const ViewPhotos = (props) => {

    const imageView = props.handleImages.map(image => 
        {
            const url = 'https://farm' + image.farm + '.static.flickr.com/' + image.server + '/' + image.id + '_' + image.secret + '.jpg';
            return ( 
                <div key={image.id} style={{float: 'right'}}>
                    {
                        <a href="url" target="_blank" className="ui medium image">
                            <img alt={image.title} src={url}/>      
                        </a>
                    }   
                </div>
            );
        }
    );

    return (
        <div>
            <div style={{marginTop: '30px'}}>
                {imageView}
            </div>
            
        </div>
    );
}

export default ViewPhotos;