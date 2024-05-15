import PropTypes from 'prop-types';

import Gradient from '@/assets/icons/Gradient';
import style from './styles.module.scss';

export const Background = ({ children, isGradient = true }) => {
  return (
    <div className={style.container}>
      {isGradient && <Gradient className={style.wrapper} />}
      {children}
    </div>
  );
};

Background.propTypes = {
  children: PropTypes.node.isRequired,
  isGradient: PropTypes.bool,
};
