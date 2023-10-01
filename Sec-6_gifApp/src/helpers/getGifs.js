export const getGifs = async (category) => {

    const API_KEY = '7UOs8hzxuZXg2pvTz5fFu8W2r3agUr7e';
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`;
    
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}