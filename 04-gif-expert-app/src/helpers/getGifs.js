const API_KEY = 'YGbEl44XAMARL3Qtk4zLQmJTXYvoBkNc';
const SEARCH_URL = 'api.giphy.com/v1/gifs/search';
const LIMIT = 10;

export const getGifs = async( category ) => { 

    const url = `https://${SEARCH_URL}?q=${ encodeURI( category ) }&limit=${ LIMIT }&api_key=${ API_KEY }`; 

    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => { 
        return ({
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        })
    });

    
    return gifs;    
}

