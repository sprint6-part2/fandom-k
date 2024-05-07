import React from 'react';
import ProgressBar from '@/pages/ListPage/components/ProgressBar';
import Header from '@/components/Header';
import styles from './styles.module.scss';
import Carousel from '@/components/Carousel';
import { listPageSettings, myPageSetting } from '@/constants/carouselSetting';
import useModal from '@/hooks/useModal';
import Modal from '@/components/Modal';
import ModalHeader from '@/components/Modal/components/ModalHeader';
// import ModalMobileHeader from '@/components/Modal/components/ModalMobileHeader';
import Profile from '@/components/Profile';
import Sample from '@/components/Sample/Sample';
import CustomButton from '@/components/CustomButton';

const TestPage = () => {
  const [isOpen, openModal, closeModal] = useModal();

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Profile
          clicked
          onClickProfile={() => {
            return console.log('프로필사진 누름');
          }}
          imageUrl="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493431544/rllze1.jpeg"
        />
        <Profile
          size="bg"
          selected
          onClickDelete={() => {
            return console.log('삭제아이콘 누름');
          }}
          imageUrl="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493561949/theboyz1.jpeg"
        />
        <Profile
          size="md"
          clicked
          onClickProfile={() => {
            return console.log('프로필사진 누름');
          }}
          imageUrl="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493201646/nct1271.jpeg"
        />
        <Profile
          size="sm"
          selected
          onClickDelete={() => {
            return console.log('삭제아이콘 누름');
          }}
          imageUrl="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714492902115/seven1.jpeg"
        />
      </div>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={isOpen} title="모달" onClose={closeModal}>
          <ModalHeader title="모달" onClose={closeModal} />
          {/* <ModalMobileHeader title="모달" onClose={closeModal} /> */}
          <div style={{ color: '#fff' }}>바디입니다.</div>
        </Modal>
      </div>
      <div>
        {/* 진행바 테스트 */}
        <div style={{ backgroundColor: 'black', height: '300px' }}>
          <div //진행바 부모 div
            style={{
              backgroundColor: 'black',
              width: '300px', //진행바이 넓이는 부모 크기 100%로 설정 되어있어요
              margin: '0 auto',
              paddingTop: '50px',
            }}
          >
            <ProgressBar // 진행바
              receivedDonations={500000} // 받은 크레딧 양 그대로 정수로 넘겨주시면 됩니다.
              deadline="2025-10-10T00:00:00.000Z" // 데드라인 그대로 문자열 넘겨주시면 됩니다.
              targetDonation={1000000} // 목표 크레딧 양 그대로 정수로 넘겨주시면 됩니다.
            />
          </div>
        </div>
        {/* 진행바 테스트 끝 */}
      </div>
      <div>
        <p>list페이지에 들어갈 캐러셀 컴포넌트 테스트</p>
        <Carousel customSettings={listPageSettings}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return (
              <div className={styles.cardItem} key={item}>
                <span>{item}</span>
              </div>
            );
          })}
        </Carousel>
        <p>my페이지에 들어갈 캐러셀 컴포넌트 테스트</p>
        <Carousel customSettings={myPageSetting} isLongArrow>
          {[1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17].map(
            (item) => {
              return (
                <div className={styles.profile} key={item}>
                  {item}
                </div>
              );
            },
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default TestPage;
