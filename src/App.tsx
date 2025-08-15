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
  console.log('API URL:', import.meta.env.VITE_API_URL);
  console.log(data);
  return (
    <>
      <h1 className="primary-color">Travel Tur 1 sasdadadfa</h1>
      <div>{data?.data?.hotels?.length}</div>
      <Test />
    </>
  );
}

export default App;
