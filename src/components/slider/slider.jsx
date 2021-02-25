import React, { useState } from 'react';

const Slider = ({ images }) => {
  let [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const imagesMaxIndex = images.length === 0 ? 0 : images.length - 1;
  console.log('activeSlideIndex', activeSlideIndex);

  const SliderSnapperBtn = ({ isPrev }) => {
    return (
      <div className='slider__snapper'>
        {isPrev
          ? <button className='slider__snapper-btn slider__snapper-btn--prev'
            onClick={() => {
              if (activeSlideIndex <= 0) {
                return false;
              }
              setActiveSlideIndex(--activeSlideIndex);
            }} />
          : <button className='slider__snapper-btn slider__snapper-btn--next'
            onClick={() => {
              if (activeSlideIndex >= imagesMaxIndex) {
                return false;
              }
              setActiveSlideIndex(++activeSlideIndex);
            }} />}
      </div>
    );
  };

  return (
    <section className='slider__gallery'>
      <ul className='slider__gallery-list'>
        {images.map(({ alt, id, src }) => {
          return (
            <li key={id}
              className={id === activeSlideIndex ? 'slider__gallery-item' : 'visually-hidden'} >
              <img className='slider__gallery-img' src={src} alt={alt} />
            </li>
          )
        })}
      </ul>
      <div className='slider__wrapper-nav'>
        <SliderSnapperBtn
          isPrev
          setActiveSlideIndex={setActiveSlideIndex}
        />
        <ul className='slider__nav'>
          {images.map(({ alt, id, src }) => {
            return (
              <li key={id}>
                <img className='slider__nav-img' src={src} alt={alt} width='128px' height='80px' />
              </li>
            )
          })}
        </ul>
        <SliderSnapperBtn
          isPrev={false}
          setActiveSlideIndex={setActiveSlideIndex}
        />
      </div>
    </section>
  );
};

export default Slider;
