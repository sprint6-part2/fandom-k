import Donation from './Donation';
import Header from '@/components/Header';
import style from './styles.module.scss';
import Credit from './Credit';
import MonthlyChart from './MonthlyChart';
import Footer from '@/components/Footer';
import { useTitle } from '@/hooks/useTitle';

const ListPage = () => {
  useTitle('FANDOM-K | List Page');
  return (
    <div className={style.container}>
      <Header />
      <main className={style.main}>
        <Credit />
        <Donation />
        <MonthlyChart />
      </main>
      <Footer />
    </div>
  );
};

export default ListPage;
