import React, { useState } from 'react';
import Modal from '@/components/Modal';
import ModalHeader from '@/components/Modal/components/ModalHeader';
import CustomButton from '@/components/CustomButton';
import Profile from '@/components/Profile';
import { getCredit, getUpdateCredit } from '@/contexts/CreditContext';
import style from './modal.module.scss';

const ChartModal = ({ isOpen, closeModal, idolList, currentTab }) => {
  const [selectedIdol, setSelectedIdol] = useState(null);

  const credit = getCredit();
  const setCredit = getUpdateCredit();

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
      } else {
        alert('크레딧 부족');
      }
      closeModal();
    }
  };

  return (
    <Modal isOpen={isOpen} title="모달" onClose={closeModal}>
      <ModalHeader
        title={
          currentTab === 'girl' ? '이달의 여자 아이돌' : '이달의 남자 아이돌'
        }
        onClose={closeModal}
      />
      <div className={style.modal}>
        <div className={style.chart}>
          {idolList.map((idol, index) => {
            return (
              <>
                <label key={idol.id} className={style.idol}>
                  <div className={style.info}>
                    <Profile
                      size="sm"
                      imageUrl={idol.profilePicture}
                      clicked={selectedIdol === idol}
                    />
                    <div className={style.text}>
                      <span>{idol.rank}</span>
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
              </>
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
