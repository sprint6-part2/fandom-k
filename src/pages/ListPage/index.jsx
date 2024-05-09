import Donation from './Donation';
import Header from '@/components/Header';
import style from './styles.module.scss';

const ListPage = () => {
  return (
    <div className={style.container}>
      <Header />
      <main className={style.main}>
        <Donation />
      </main>
    </div>
  );
};

export default ListPage;
