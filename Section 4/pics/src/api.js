import axios from "axios";

const searchImages = async(term) => {

    const res = await axios.get("https://api.unsplash.com/search/photos", {

        headers: {
            Authorization: "Client-ID eozw-u-wDwiSeJfxXOFQDIsZBl_AUT2d-0iUvwhYdzY"
        },

        params: {

            query: term
        }
    });

    return res.data.results;
};

export default searchImages;