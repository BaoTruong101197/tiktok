import styles from './Image.module.scss';
import classNames from 'classnames/bind';

import image from '~/assets';
import { forwardRef, useState } from 'react';

const cx = classNames.bind(styles);

function Image({ alt, src, className, fallback: customFallback = image.noImg, props }, ref) {
    const [fallback, setfallback] = useState('');

    return (
        <img
            ref={ref}
            src={fallback || src}
            alt={alt}
            className={cx('wrapper', className)}
            {...props}
            onError={() => setfallback(customFallback)}
        />
    );
}

export default forwardRef(Image);
