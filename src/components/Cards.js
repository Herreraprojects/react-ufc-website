import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Fighter Highlights</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/dvc.jpg'
              text='Fight of the Year'
              label='Lightweight'
              videoUrl='https://www.youtube.com/watch?v=zhC7KhFk49M'
            />
            <CardItem
              src='images/uve.jpg'
              text='Usman vs Edwards 3'
              label='Welterweight'
              videoUrl='https://www.youtube.com/watch?v=gF56UtKVErg'
              
              />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mvo.jpg'
              text='Mackachev vs Olivera'
              label='Lightweight'
              videoUrl='https://www.youtube.com/watch?v=gF56UtKVErg'
            />
            <CardItem
              src='images/gvs.jpg'
              text='Shevchenko vs Grasso'
              label='Flyweight'
              videoUrl='https://www.youtube.com/watch?v=IFPDYYp_RNY'
            />
            <CardItem
              src='images/mvf.jpg'
              text='Moreno vs Figueiredo '
              label='Flyweight'
              videoUrl='https://www.youtube.com/watch?v=mzJBc5wcxtc'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;