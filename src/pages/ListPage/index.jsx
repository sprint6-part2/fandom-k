import Donation from './Donation';
import style from './styles.module.scss';
import Credit from './Credit';
import MonthlyChart from './MonthlyChart';
import Footer from '@/components/Footer';
import { useTitle } from '@/hooks/useTitle';
import useScrollToTop from '@/hooks/useScrollToTop';
import { motion } from 'framer-motion';

const ListPage = () => {
  useTitle('FANDOM-K | List Page');
  useScrollToTop();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={style.container}
    >
      <main className={style.main}>
        <Credit />
        <Donation />
        <MonthlyChart />
      </main>
      <Footer />
    </motion.div>
  );
};

export default ListPage;
