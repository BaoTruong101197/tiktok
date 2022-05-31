import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import images from '~/assets';
import Button from '~/components/Button';
import {
    PlusIcon,
    ThreeDots,
    LanguageIcon,
    QuestionsIcon,
    KeyboardShortCutIcon,
    MessageIcon,
    InboxIcon,
    ViewProfileIcon,
    GetCoinIcon,
    SettingsIcon,
    LogoutIcon,
} from '~/components/Icons';
import Menu from '~/components/Propper/Menu';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <QuestionsIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardShortCutIcon />,
        title: 'Keyboard shortcuts',
    },
];

const USER_MENU = [
    {
        icon: <ViewProfileIcon />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <GetCoinIcon />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <SettingsIcon />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        topLine: true,
    },
];

const currentUser = true;

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <img src={images.logo} alt="Tiktok logo" />
                <Search />
                <div className={cx('actions')}>
                    <Button rect IconLeft={<PlusIcon width="2rem" height="2rem" />}>
                        <span>Upload</span>
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Message" placement="bottom">
                                <MessageIcon className={cx('message-icon')} />
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <InboxIcon className={cx('inbox-icon')} />
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    {currentUser ? (
                        <Menu items={USER_MENU}>
                            <Image
                                src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/274012128_2199895376814973_2944853333204392476_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QgWX3IeH2LwAX_CyCw2&_nc_ht=scontent.fdad1-1.fna&oh=00_AT_gRGIdh2edBZ0qIkpdocZC-ArwKvaBjCkqQHfWDI_vrg&oe=629975BB"
                                alt="profile avatar"
                                className={cx('profile-avatar')}
                            />
                        </Menu>
                    ) : (
                        <Menu items={MENU_ITEMS}>
                            <ThreeDots width="2.8rem" height="2.8rem" className={cx('three-dots')} />
                        </Menu>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
