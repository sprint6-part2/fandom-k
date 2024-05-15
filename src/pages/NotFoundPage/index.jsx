import { useNavigate } from 'react-router-dom';
import CustomButton from '@/components/CustomButton';
import Logo from '@/assets/icons/Logo';
import Idol1 from '@/assets/images/nctdream.jpg';
import Idol2 from '@/assets/images/newjeans.jpg';
import Idol3 from '@/assets/images/seventeen.jpg';
import Idol4 from '@/assets/images/aespa.jpg';
import style from './styles.module.scss';
import { useTitle } from '@/hooks/useTitle';
import useScrollToTop from '@/hooks/useScrollToTop';

const NotFoundPage = () => {
  useTitle('FANDOM-K | Not Found Page');
  useScrollToTop();
  const navigate = useNavigate();

  const idolList = [Idol1, Idol2, Idol3, Idol4];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * idolList.length);
    return idolList[randomIndex];
  };

  const randomImage = getRandomImage();

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={randomImage} alt="아이돌 이미지" />
        <div />
        <Logo width={240} height={50} />
      </div>
      <div className={style.text}>
        <h3>잘못된 경로</h3>
        <p>존재하지 않는 페이지입니다.</p>
      </div>
      <CustomButton
        rounded
        btnText="랜딩 페이지로"
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default NotFoundPage;
