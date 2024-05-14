import Logo from '@/assets/icons/Logo';
import style from './styles.module.scss';

export const Nothing = ({ images }) => {
  return (
    <div className={style.container}>
      <Logo />
      <h2 className={style.content}>관심이 있는 아이돌을 추가해주세요</h2>
    </div>
  );
};
