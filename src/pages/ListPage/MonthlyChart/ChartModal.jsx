import React, { useState } from 'react';
import Modal from '@/components/Modal';
import ModalHeader from '@/components/Modal/components/ModalHeader';
import CustomButton from '@/components/CustomButton';
import Profile from '@/components/Profile';
import { getCredit, getUpdateCredit } from '@/contexts/CreditContext';

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
      <div style={{ color: '#fff', width: '461px', height: '653px' }}>
        <div>
          {idolList.slice(0, 5).map((idol) => {
            return (
              <div
                key={idol.id}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Profile size="sm" imageUrl={idol.profilePicture} />
                <div>
                  <span>{idol.group} </span>
                  <span>{idol.name}</span>
                </div>
                <input
                  type="radio"
                  name="idol"
                  onClick={() => handleSelectIdol(idol)}
                />
              </div>
            );
          })}
        </div>
        <CustomButton
          btnText="투표하기"
          disabled={!selectedIdol}
          onClick={handleChartClick}
        />
        <p>투표하는 데 1000 크레딧이 소모됩니다.</p>
      </div>
    </Modal>
  );
};

export default ChartModal;
