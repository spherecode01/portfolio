import axios from "axios";

const BASE_URL = " https://www.googleapis.com/customsearch/v1"

const params = {
    key: 'AIzaSyA0XF7pIeEYI0ljnaGh19hjFH0g_V83rLw',
    cx :'e59f164bebaf949db'
}

export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL,{
        params : {...params, ...payload}
    })
    return data;
};
