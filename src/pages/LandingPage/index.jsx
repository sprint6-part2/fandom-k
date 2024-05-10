import style from './styles.module.scss';
import Main from './Main';
import Landing from './Landing';

const LadingPage = () => {
  return (
    <div className={style.container}>
      <Main />
      <Landing />
    </div>
  );
};

export default LadingPage;
