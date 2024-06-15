import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/Home";
import DetailsPage from "./pages/Details";
import LoadingOverlay from "../src/components/loading/LoadingOverlay";
import { NewsContext } from "./stores/news-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/news/:id", element: <DetailsPage /> },
    ],
  },
]);

const API_KEY = '<PLACE API KEY HERE>';

function App() {
  const [newsList, setNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getNewsById = (id) => {
    return newsList.find(item => item.id.toString() === id.toString());
  }

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${API_KEY}`
      );

      if (!response.ok) {
        setIsLoading(false);
        setNewsList([]);
      } else {
        const resData = await response.json();
        setNewsList(resData.results);
      }
      setIsLoading(false);
    }

    fetchNews();
  }, []);

  const contextValue = {
    news: newsList,
    getNewsById,
  };

  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100">
        <NewsContext.Provider value={contextValue}>
          {isLoading && <LoadingOverlay />}
          <RouterProvider router={router} />
        </NewsContext.Provider>
      </div>
    </div>
  );
}

export default App;
