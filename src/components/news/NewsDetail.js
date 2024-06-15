const NewsDetail = ({ news }) => {
  const imageUrl  = news.media[0]['media-metadata'][2].url
  return (
    <div className="news-detail max-w-5xl mx-auto p-4">
      <img
        className="w-full h-80 object-cover"
        src={imageUrl}
        alt={news.title}
      />
       <div className="p-4">
          <span className="inline-block bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded mb-4">
            {news.section}
          </span>
          <h1 className="text-3xl font-bold my-4">{news.title}</h1>
      <p className="text-gray-700">{news.abstract}</p>
        </div>
      
    </div>
  );
};

export default NewsDetail;
