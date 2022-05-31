import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        if (!value) return;
        const handler = setTimeout(() => setDebounce(value), delay);

        return () => clearTimeout(handler);
    }, [value]);

    return debounce;
}

export default useDebounce;
