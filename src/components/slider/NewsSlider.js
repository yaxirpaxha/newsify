import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NewsSlider = ({ newsList }) => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleClick = (id) => {
    navigate(`/news/${id}`);
  };


  const getImageURL = (news) => {
    return news.media[0]['media-metadata'][2].url;
  }

  return (
    <div className="mb-8 mt-4 mx-12">
      <Slider {...settings}>
        {newsList.map((news) => (
          <div 
            key={news.id} 
            className="cursor-pointer"
            onClick={() => handleClick(news.id)}
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img className="w-full h-96 object-cover"  src={getImageURL(news)} alt={news.title} />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{news.title}</h2>
                <p className="text-gray-700">{news.abstract.substring(0, 100)}...</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;