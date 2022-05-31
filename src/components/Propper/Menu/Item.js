import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Item({ item, onClick }) {
    const languageType = item.type === 'Language' ? 'language-title' : '';
    return (
        <Button
            className={cx('menu-item', { 'top-line': item.topLine })}
            IconLeft={item.icon}
            to={item.to}
            onClick={onClick}
            type={languageType}
        >
            {item.title}
        </Button>
    );
}

export default Item;
