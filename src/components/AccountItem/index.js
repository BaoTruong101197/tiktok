import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets';
import { BlueTick } from '../Icons';
import Image from '../Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link className={cx('wrapper')} to={`@${data.nickname}`}>
            <Image className={cx('avatar')} alt={data.nickname} src={data.avatar} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <span className={cx('blue-tick')}>
                            <BlueTick width="1.4rem" height="1.4rem" />
                        </span>
                    )}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
