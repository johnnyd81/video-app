import axios from "axios";

//the api key has been stored in a .env file and is referenced using process.env
const KEY = process.env.REACT_APP_API_KEY;

//axios is used to get the data for the videos
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
