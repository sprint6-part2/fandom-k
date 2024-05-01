import styles from './style.module.scss';
import Carousel from '@/components/Carousel';
import { listPageSettings, myPageSetting } from '@/constants/carouselSetting';

const TestPage = () => {
  return (
    <div>
      <p>리스트페이지에 들어갈 캐러셀 컴포넌트 테스트</p>
      <Carousel customSettings={listPageSettings}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return (
            <div className={styles.cardItem} key={item}>
              <span>{item}</span>
            </div>
          );
        })}
      </Carousel>
      <p>마이페이지에 들어갈 캐러셀 컴포넌트 테스트</p>
      <Carousel customSettings={myPageSetting} isLongArrow>
        {['1장', '2장', '3장'].map((page) => {
          return (
            <div key={page}>
              <div className={styles.profileItems}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                  return (
                    <div key={item} className={styles.profile}>
                      {page + item}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TestPage;
