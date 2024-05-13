import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import Description from './components';
import Logo from '@/assets/icons/Logo';
import CustomButton from '@/components/CustomButton';
import mainBackgroundImage from '@/assets/images/redvelvet.png';
import SectionBackground1 from '@/assets/images/girls_generation.svg';
import SectionBackground2 from '@/assets/images/newjeans2.svg';
import SectionBackground3 from '@/assets/images/nct.svg';
import sectionImage1 from '@/assets/images/capture1.png';
import sectionImage2 from '@/assets/images/capture2.png';
import sectionImage3 from '@/assets/images/capture3.png';

const LadingPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div className={styles.main}>
          <div className={styles.info}>
            <p>
              내가 좋아하는 아이돌을
              <br />
              가장 <span>쉽게 덕질</span>하는 방법
            </p>
            <div className={styles.logo}>
              <Logo width="100%" height="100%" />
            </div>
            <img src={mainBackgroundImage} alt="아이돌 사진" />
          </div>
          <div className={styles.start_btn}>
            <CustomButton
              btnText="지금 시작하기"
              maxHeight={48}
              onClick={() => navigate('/list')}
            />
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.rectangle} />
          <Description
            backgroundImg={SectionBackground1}
            mainImg={sectionImage1}
            title="후원하기"
            mainText={'좋아하는 아이돌에게\n쉽게 조공해 보세요'}
          />
          <Description
            backgroundImg={SectionBackground2}
            mainImg={sectionImage2}
            title="이달의 아티스트"
            mainText={'내 아티스트에게 1등의\n영예를 선물하세요'}
          />
          <Description
            backgroundImg={SectionBackground3}
            mainImg={sectionImage3}
            title="나만의 아티스트"
            mainText={'좋아하는 아티스트들의\n소식을 모아보세요'}
          />
        </div>
      </div>
    </div>
  );
};

export default LadingPage;
