import React, { useState } from 'react';
import classnames from 'classnames';
import { toast } from 'react-toastify';
import Modal from '@/components/Modal';
import ModalHeader from '@/components/Modal/components/ModalHeader';
import CustomButton from '@/components/CustomButton';
import { getCredit, getUpdateCredit } from '@/contexts/CreditContext';
import style from './modal.module.scss';
import CreditIcon from '@/assets/icons/Credit';
import { creditOptions } from '@/constants/credit';

const CreditModal = ({ isOpen, closeModal }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const credit = getCredit();
  const setCredit = getUpdateCredit();

  // 크레딧 선택
  const handleSelectValue = (value) => {
    setSelectedValue(value);
  };

  // 크레딧 충전 클릭
  const handleChargeClick = () => {
    if (selectedValue) {
      const currentCredit = credit || 0;
      setCredit(parseInt(currentCredit + selectedValue));
      toast('🎉  크레딧 충전 완료!');
      handleCloseModal();
    }
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setSelectedValue(null);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} title="모달" onClose={handleCloseModal}>
      <ModalHeader title="크레딧 충전하기" onClose={handleCloseModal} />
      <div className={style.modal}>
        <div>
          {creditOptions.map((option) => (
            <label
              key={option}
              className={classnames(style.box, {
                [style.select_box]: selectedValue === option,
              })}
            >
              <div
                className={classnames(style.credit, {
                  [style.select_credit]: selectedValue === option,
                })}
              >
                <CreditIcon width={20} height={25} />
                <span>{option}</span>
              </div>
              <input
                className={style.radio}
                type="radio"
                value={option}
                checked={selectedValue === option}
                onChange={() => handleSelectValue(option)}
              />
            </label>
          ))}
        </div>
        <CustomButton
          btnText="충전하기"
          onClick={handleChargeClick}
          disabled={!selectedValue}
          maxHeight={42}
        />
      </div>
    </Modal>
  );
};

export default CreditModal;
