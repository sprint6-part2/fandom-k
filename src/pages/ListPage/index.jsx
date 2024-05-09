import Donation from './Donation';
import Header from '@/components/Header';
import style from './styles.module.scss';
import Credit from './Credit';
import MonthlyChart from './MonthlyChart';

const ListPage = () => {
  return (
    <div className={style.container}>
      <Header />
      <main className={style.main}>
        <Credit />
        <Donation />
        <MonthlyChart />
      </main>
    </div>
  );
};

export default ListPage;
