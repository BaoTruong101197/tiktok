import styles from './Propper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Propper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Propper;
