import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardList from '../components/homecardlist';

export const HomePage = () => {
  const [data, setData] = useState({ home: { title: 'Home Page', subtitle: '', content: [] } });
  useEffect(() => {
    fetch('https://team13webapp.azurewebsites.net/api/home')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log('Title: ' + data.home.title + '\nSubtitle: ' + data.home.subtitle);
      })
      .catch((error) => console.error(error));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const navigate = useNavigate();
  return data.home.title === 'Home Page' ? (
    <div />
  ) : (
    <div>
      <h2>{data.home.title}</h2>
      <p>{data.home.subtitle}</p>
      <hr />
      <CardList cards={data.home.content} />
      <hr />
      <button onClick={() => navigate('comments')}>Comments</button>
    </div>
  );
};
