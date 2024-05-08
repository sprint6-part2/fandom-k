import React, { useEffect, useState } from 'react';
import style from './styles.module.scss';
import Carousel from '@/components/Carousel';
import { carouselSettings } from './carouselSetting';
import Card from './components/Card';
import { getDonations } from '@/apis/getDonations';

const Donation = () => {
  const [donationList, setDonationList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDonations()
      .then((data) => {
        setDonationList(data);
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        setDonationList(null);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className={style.container}>
      <h2 className={style.title}>후원을 기다리는 조공</h2>
      {isLoading && <p className={style.loading}>데이터 가져오는 중...</p>}
      {error && (
        <div className={style.error}>
          <h3>⚠️ 문제 발생 ⚠️</h3>
          <p>{error}</p>
        </div>
      )}
      {donationList && (
        <Carousel customSettings={carouselSettings}>
          {donationList.list.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </Carousel>
      )}
    </section>
  );
};

export default Donation;
