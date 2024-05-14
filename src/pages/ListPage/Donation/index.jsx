import { useState, useEffect } from 'react';
import style from './styles.module.scss';
import Carousel from '@/components/Carousel';
import LoadingError from '@/components/LoadingError';
import { carouselSettings } from './carouselSetting';
import Card from './components/Card';
import useLoad from '@/hooks/useLoad';
import { getDonations } from '@/apis/getDonations';
import Spinner from '@/assets/icons/Spinner';

const Donation = () => {
  const [isLoading, loadingError, handleLoad] = useLoad(getDonations);
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
      {isLoading && (
        <div className={style.loading}>
          <Spinner />
        </div>
      )}
      {loadingError && (
        <div className={style.loading}>
          <LoadingError errorMessage={loadingError.message} />
        </div>
      )}
      {!loadingError && donationList && (
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
