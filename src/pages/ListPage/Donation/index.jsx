import { useState, useEffect } from 'react';
import style from './styles.module.scss';
import Carousel from '@/components/Carousel';
import { carouselSettings } from './carouselSetting';
import Card from './components/Card';
import Logo from '@/assets/icons/Logo';
import { useLoad } from '@/hooks/useLoad';
import { getDonations } from '@/apis/getDonations';

const Donation = () => {
  const { isLoading, loadingError, handleLoad } = useLoad(getDonations);
  const [donationList, setDonationList] = useState(null);

  const handleDonationLoad = async () => {
    const donations = await handleLoad();
    if (donations) {
      setDonationList(donations.list);
    }
  };

  useEffect(() => {
    handleDonationLoad();
  }, []);

  return (
    <section className={style.container}>
      <h2 className={style.title}>후원을 기다리는 조공</h2>
      {isLoading && <p className={style.loading}>데이터 가져오는 중...</p>}
      {loadingError && (
        <div className={style.error}>
          <Logo />
          <h3>문제가 발생했습니다</h3>
          <p>{loadingError}</p>
        </div>
      )}
      {donationList && (
        <Carousel customSettings={carouselSettings}>
          {donationList.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </Carousel>
      )}
    </section>
  );
};

export default Donation;
