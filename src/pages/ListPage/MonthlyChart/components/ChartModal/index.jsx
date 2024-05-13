import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Modal from '@/components/Modal';
import ModalHeader from '@/components/Modal/components/ModalHeader';
import ModalMobileHeader from '@/components/Modal/components/ModalMobileHeader';
import CustomButton from '@/components/CustomButton';
import Profile from '@/components/Profile';
import { getCredit, getUpdateCredit } from '@/contexts/CreditContext';
import style from './styles.module.scss';
import { toast } from 'react-toastify';
import { FEMALE } from '@/constants/tabTypes';

const ChartModal = ({ isOpen, closeModal, idolList, currentTab }) => {
  const [selectedIdol, setSelectedIdol] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const expandSize = 550;

  const credit = getCredit();
  const setCredit = getUpdateCredit();

  const title =
    currentTab === FEMALE ? '이달의 여자 아이돌' : '이달의 남자 아이돌';

  // 투표할 아이돌 선택
  const handleSelectIdol = (idol) => {
    setSelectedIdol(idol);
  };

  // 투표하기 클릭
  const handleChartClick = () => {
    if (selectedIdol) {
      const newCredit = parseInt(credit - 1000);
      if (newCredit >= 0) {
        setCredit(newCredit);
        toast(`🎉  ${selectedIdol.group} ${selectedIdol.name} 투표 완료!`);
      } else {
        toast.error('투표하기 위한 크레딧 부족!');
      }
      closeModal();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Modal isOpen={isOpen} title="모달" onClose={closeModal}>
      {windowWidth <= expandSize ? (
        <ModalMobileHeader title={title} onClose={closeModal} />
      ) : (
        <ModalHeader title={title} onClose={closeModal} />
      )}
      <div
        className={classNames(style.modal, {
          [style.expand]: windowWidth <= expandSize,
        })}
      >
        <div className={style.chart}>
          {idolList.map((idol, index) => {
            return (
              <div key={idol.id}>
                <label className={style.idol}>
                  <div className={style.info}>
                    <Profile
                      size="sm"
                      imageUrl={idol.profilePicture}
                      clicked={selectedIdol === idol}
                    />
                    <div className={style.text}>
                      <span>{index + 1}</span>
                      <div className={style.name}>
                        <span>
                          {idol.group} {idol.name}
                        </span>
                        <span>{idol.totalVotes.toLocaleString('ko-KR')}표</span>
                      </div>
                    </div>
                  </div>
                  <input
                    className={style.radio}
                    type="radio"
                    name="idol"
                    onClick={() => handleSelectIdol(idol)}
                  />
                </label>
                {index !== idolList.length - 1 && (
                  <div className={style.division} />
                )}
              </div>
            );
          })}
        </div>
        <CustomButton
          btnText="투표하기"
          disabled={!selectedIdol}
          onClick={handleChartClick}
        />
        <p className={style.bottom}>
          투표하는 데 <span>1000</span> 크레딧이 소모됩니다.
        </p>
      </div>
    </Modal>
  );
};

export default ChartModal;
