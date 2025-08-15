import './app.scss';
import { useQuery } from '@tanstack/react-query';
import requests from './axios/requests';
import Test from './Test';
function App() {
  const { data } = useQuery({
    queryKey: ['hotels'],
    queryFn: () =>
      requests.hotels.number_of_hotels({
        locationId: 895,
      }),
  });
  const { data: hotel } = useQuery({
    queryKey: ['hotel'],
    queryFn: () =>
      requests.hotels.search_name_location({
        query: 'Москва',
        lang: 'ru',
        lookFor: 'both',
        limit: 1,
        // locationId: 895,
      }),
  });
  console.log('API URL:', import.meta.env.VITE_API_URL);
  console.log(data);
  console.log('hotel', hotel);

  return (
    <>
      <h1 className="primary-color">Travel Tur 1 sasdadadfa</h1>
      <h1 className="primary-color">hotel</h1>
      <div>{data?.data?.hotels?.length}</div>
      <Test />
    </>
  );
}

export default App;
