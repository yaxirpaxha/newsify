import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const imageUrl  = news.media[0]['media-metadata'][1].url
  return (
    <div className="news-card bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={news.title}
      />
      <div className="p-4 relative">
        <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
          {news.section}
        </span>
        <h2 className="text-xl font-bold my-2">{news.title}</h2>
        <p className="text-gray-700">{news.abstract.substring(0, 100)}...</p>
        <Link
          to={`/news/${news.id}`}
          className="text-red-500 hover:underline mt-2 block news-link"
        >
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
