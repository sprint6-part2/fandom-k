import React from 'react';
import style from './styles.module.scss';
import Carousel from '@/components/Carousel';
import { carouselSettings } from './carouselSetting';
import Card from './components/Card';
import testData from './mock.json';

const Donation = () => {
  return (
    <section className={style.container}>
      <h2 className={style.title}>후원을 기다리는 조공</h2>
      <Carousel customSettings={carouselSettings}>
        {testData.list.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </Carousel>
    </section>
  );
};

export default Donation;
