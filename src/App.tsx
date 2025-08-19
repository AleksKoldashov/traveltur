import { useQuery } from '@tanstack/react-query';
import requests from './axios/requests';
import Button from './common/Button/Button';
import SearchIcon from './images/icons/search.svg?react';
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

      <Button
        type="primary"
        text="label"
        onClick={() => console.log('click')}
        link="https://google.com"
        width="300px"
      />
      <Button
        width="200px"
        height="50px"
        type="secondary"
        text="label"
        onClick={() => console.log('click')}
      />
      <Button
        type="tertiary"
        icon={<SearchIcon />}
        borderRadius="50px"
        padding="0"
        width="40px"
        height="40px"
        // text="label"
        onClick={() => console.log('click')}
      />
      <Button
        type="primary"
        icon={<SearchIcon />}
        padding="0"
        onClick={() => console.log('click')}
        link="https://google.com"
        width="40px"
        height="40px"
      />
    </>
  );
}

export default App;
