import React, { useEffect, useState } from 'react';
import style from './styles.module.scss';
import Carousel from '@/components/Carousel';
import { carouselSettings } from './carouselSetting';
import Card from './components/Card';
import testData from './mock.json';
import { getDonations } from '@/apis/getDonations';

const Donation = () => {
  // const [donationList, setDonationList] = useState([]);

  console.log(import.meta.env);
  console.log(import.meta.env.VITE_BACKEND_ENDPOINT);

  // useEffect(() => {
  //   getDonations()
  //     .then((data) => {
  //       console.log(data);
  //       setDonationList(data); // 데이터를 상태에 설정해줍니다.
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching donations:', error);
  //     });
  // }, []);

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
