import styles from './Button.module.scss';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    onClick,
    primary = false,
    outline = false,
    text = false,
    rect = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    icon,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((propKey) => {
            if (propKey.startsWith('on') && typeof props[propKey] === 'function') {
                delete props[propKey];
            }
        });
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        rect,
        disabled,
        rounded,
        small,
        large,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {icon && <img src={icon} alt="Icon" className={cx('icon')} />}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
