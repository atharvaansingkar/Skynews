import React from 'react';
import Card from './components/Card';

const newsData = [
  {
    imageUrl: '/images/TH_HD_Delhi_23~07~2023[1].jpg',
    title: 'Delhi govt. on high alert as Yamuna likely to breach danger mark again',
    description: 'Water level recedes below 205.33 metres on Saturday; discharge of more than two lakh cusecs of water from Hathnikund barrage in Haryana is expected to increase the water level in the river today; government urges people to remain vigilant',
    author: 'The Hindu Bureau NEW DELHI',
  },
  
];

const App = () => {
  return (
    <div>
      {}
      {}
      
      <div className="container mt-4">
        <div className="row">
          {newsData.map((news, index) => (
            <div key={index} className="col-md-4 mb-4">
              <Card
                imageUrl={news.imageUrl}
                title={news.title}
                description={news.description}
                author={news.author}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
