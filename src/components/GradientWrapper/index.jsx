import Gradient from '@/assets/icons/Gradient';
import style from './styles.module.scss';

export const GradientWrapper = ({ children }) => {
  return (
    <div className={style.wrapper_container}>
      <Gradient className={style.wrapper} />
      {children}
    </div>
  );
};
