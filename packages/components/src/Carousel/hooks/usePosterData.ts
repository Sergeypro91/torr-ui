import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_TMDB_TREND_API;
const API_KEY = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

type Response<Result extends {}> = {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
};

type Trend = {
  id: number;
  title?: string;
  name?: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  poster_path: string;
};

export const usePosterData = () => {
  const [trendList, setTrendList] = useState<Trend[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sortTrends = (response: Response<Trend>) => {
    const { results } = response;

    return results
      .toSorted(
        (a, b) =>
          b.vote_count * b.vote_average * b.popularity -
          a.vote_count * a.vote_average * a.popularity,
      )
      .slice(0, 10);
  };

  useEffect(() => {
    setIsLoading(true);

    fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setTrendList(sortTrends(data)))
      .catch();
  }, []);

  return { trendList, isLoading };
};
