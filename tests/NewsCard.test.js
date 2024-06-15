import React from 'react';
import { render } from '@testing-library/react';
import NewsCard from '../src/components/news/NewsCard';

const dummyNews = {
  id: 1,
  title: 'News Title',
  abstract: 'Description for news',
  image: 'https://via.placeholder.com/150',
  section: 'Politics',
  media: [
    {
      'media-metadata': [
        {url: 'https://via.placeholder.com/150',},
        {url: 'https://via.placeholder.com/150',},
        {url: 'https://via.placeholder.com/150',}
      ]
    }
  ]
};

test('renders NewsCard component', () => {
  const { getByText } = render(<NewsCard news={dummyNews} />);
  const titleElement = getByText(/News Title/i);
  const categoryElement = getByText(/Politics/i);
  expect(titleElement).toBeInTheDocument();
  expect(categoryElement).toBeInTheDocument();
});