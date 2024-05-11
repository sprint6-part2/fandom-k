import Donation from './Donation';
import Header from '@/components/Header';
import style from './styles.module.scss';
import Credit from './Credit';
import MonthlyChart from './MonthlyChart';
import { CreditProvider } from '@/contexts/CreditContext';

const ListPage = () => {
  return (
    <CreditProvider>
      <div className={style.container}>
        <Header />
        <main className={style.main}>
          <Credit />
          <Donation />
          <MonthlyChart />
        </main>
      </div>
    </CreditProvider>
  );
};

export default ListPage;
