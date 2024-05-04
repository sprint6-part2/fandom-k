import React from 'react';
import style from './styles.module.scss';
import Carousel from '@/components/Carousel';
import { carouselSettings } from './carouselSetting';
import Card from './components/Card';
import testData from './mock.json';

const Donation = () => {
  return (
    <section>
      <h2 className={style.title}>후원을 기다리는 조공</h2>
      <Carousel customSettings={carouselSettings}>
        {testData.list.map((item) => {
          return (
            <article className={style.cardItem} key={item.id}>
              <Card item={item} />
            </article>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Donation;
