import { useContext } from "react";
import { NewsContext } from "../stores/news-context";
import NewsGrid from "../components/news/NewsGrid";
import NewsSlider from "../components/slider/NewsSlider";
import Divider from "../components/divider/Divider";
import NoData from "../components/no-data/NoData";

const Home = () => {
  const newsCtx = useContext(NewsContext);
  return (
    <>
      {newsCtx.news.length > 0 ? (
        <>
          <NewsSlider newsList={newsCtx.news} />
          <Divider />
          <NewsGrid newsList={newsCtx.news} />
        </>
      ) : (
        <NoData />
      )}
    </>
  );
};

export default Home;
