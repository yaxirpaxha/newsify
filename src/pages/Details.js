import { useContext } from "react";
import { NewsContext } from "../stores/news-context";
import { useParams } from "react-router-dom";
import NewsDetail from "../components/news/NewsDetail";
import NoData from "../components/no-data/NoData";

const Details = () => {
  const { id } = useParams();
  const newsCtx = useContext(NewsContext);
  const news = newsCtx.getNewsById(id);
  if (!news) return <NoData />;
  return <NewsDetail news={news} />;
};

export default Details;
