import React from 'react';

function CardItem({ src, text, label, videoUrl }) {
  const openVideoInNewWindow = () => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' onClick={openVideoInNewWindow}>
          <figure className='cards__item__pic-wrap' data-category={label}>
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className='cards__item__link'
            ></a>
            <img
              className='cards__item__img'
              alt='Fight'
              src={src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
