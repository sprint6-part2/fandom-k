import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';


const Lading = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.donation}>
          <div className={styles.text}>
            <span className={styles.Highlight}>후원하기</span>
            좋아하는 아이돌에게<br />
            쉽게 조공해 보세요
          </div>
          <figure>
            <img //1번째 넣을 이미지
              width="320"
              height="693"
              src=""
              alt="donationImg"
            />
          </figure>
        </div>  
        <div className={styles.monArtist}>
          <div className={styles.text}>
            <span className={styles.Highlight}>이달의 아티스트</span>
            내 아티스트에게 1등의<br />
            영예를 선물하세요
          </div>
          <figure>
            <img // 2번째 넣을 이미지
              width="320"
              height="693"
              src=""
              alt="monArtistImg"
            />
          </figure>
        </div>
        <div className={styles.myArtist}>
          <div className={styles.text}>
            <span className={styles.Highlight}>나만의 아티스트</span>
            좋아하는 아티스트들의<br />
            소식을 모아보세요
          </div>
          <figure>
            <img //3번째 넣을 이미지
              width="320"
              height="693"
              src=""
              alt="myArtistImg"
            />
          </figure>
        </div>
      </div>

    </section>
  );
};

export default Lading;
