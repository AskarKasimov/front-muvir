import { useParams } from "react-router-dom";

const NewsItem = () => {
    const newsID = useParams().newsID;
    return (
        <>{newsID}</>
    );
}

export default NewsItem