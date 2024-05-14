import React, { useState } from 'react';
import classNames from 'classnames';
import Modal from '@/components/Modal';
import ModalHeader from '@/components/Modal/components/ModalHeader';
import CustomButton from '@/components/CustomButton';
import { inputToNumber } from '@/utils/input';
import { getCredit, getUpdateCredit } from '@/contexts/CreditContext';
import style from './styles.module.scss';
import { toast } from 'react-toastify';
import { putContribute } from '@/apis/putContribute';
import Spinner from '@/assets/icons/Spinner';

const DonationModal = ({ isOpen, closeModal, item, setIsDonate }) => {
  const [creditInput, setCreditInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const credit = getCredit();
  const setCredit = getUpdateCredit();

  // 후원할 값 입력
  const handleInputChange = (e) => {
    setCreditInput(e.target.value);
  };

  // 후원하기 버튼 클릭
  const handleDonateClick = async () => {
    if (parseInt(creditInput) && creditInput <= credit) {
      try {
        setIsLoading(true);
        await putContribute(item.id, creditInput);
        setCredit(parseInt(credit - creditInput));
        setIsDonate(true);
        toast(`🎉  ${creditInput} 크레딧 후원 성공!`);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
        handleCloseModal();
      }
    }
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setCreditInput('');
    closeModal();
  };

  // 버튼 내용
  const buttonContent = isLoading ? (
    <div className={style.spinner}>
      <Spinner width={40} height={40} fill="white" />
    </div>
  ) : (
    '후원하기'
  );

  return (
    <Modal isOpen={isOpen} title="모달" onClose={handleCloseModal}>
      <ModalHeader title="후원하기" onClose={handleCloseModal} />
      <div className={style.modal}>
        <div className={style.info}>
          <img src={item.idol.profilePicture} alt="후원할 아이돌" />
          <div className={style.text}>
            <span>{item.subtitle}</span>
            <span>{item.title}</span>
          </div>
        </div>
        <input
          className={classNames(style.input, {
            [style.error]: creditInput > credit,
          })}
          type="text"
          inputMode="numeric"
          placeholder="크레딧 입력"
          value={creditInput}
          onChange={async (e) => {
            e.target.value = inputToNumber(e.target.value);
            handleInputChange(e);
          }}
        />
        <div className={style.message}>
          {creditInput > credit && (
            <p>갖고 있는 크레딧보다 더 많이 후원할 수 없어요</p>
          )}
        </div>
        <CustomButton
          btnText={buttonContent}
          disabled={
            !creditInput ||
            creditInput > credit ||
            creditInput[0] === '0' ||
            isLoading
          }
          onClick={handleDonateClick}
        />
      </div>
    </Modal>
  );
};

export default DonationModal;
