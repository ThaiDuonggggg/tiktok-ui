import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faPlus,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import config from '~/config';
import Button from '~/components/Button/Button';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessIcon } from '~/components/Icons/Icons';
import Image from '~/components/Image/Image';
import Search from '../Search/Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoa',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Favorites',
        to: '/favorites',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Get Coins',
        to: '/coins',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'LIVE Studio',
        to: '/live',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Settings',
        to: '/settings',
    },

    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const handleMenuOnchange = (menuItem) => {
        switch (menuItem) {
            case 'language':
                // Handle change Language
                break;

            default:
                break;
        }
    };
    const currentUser = false;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 100]} offset={[2, 9]} content="Messages" placement="bottom">
                                <button className={cx('action-btn-mess')}>
                                    <MessIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} offset={[2, 9]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuOnchange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/8f075d187bc0e92cc0b32a0b870bf97f~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1713344400&x-signature=JMs3yWTPaVe57i%2FZdFl%2F9UKuths%3D"
                                alt="user"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
