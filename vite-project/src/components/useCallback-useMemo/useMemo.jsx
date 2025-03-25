import React, { memo, useMemo } from 'react';

function wait(time) {
    let sum = 0;
    for (let index = 0; index < time; index++) {
        const random = Math.ceil(Math.random() * 100);
        sum += index + random;
    }
    return sum;
}

const Count = ({ direction, count, handleCount }) => {
    console.log('render', count)
    const res = useMemo(() => wait(100000000), []);

    return (
        <div>
            <h1>Result: {res}</h1> 
            <h1 className='mb-3'>Count: {count}</h1>
            <button
                className='px-4 py-2 bg-slate-700 text-white cursor-pointer rounded-md'
                onClick={() => handleCount(direction)}
            >
                Count
            </button>
        </div>
    );
};

export default memo(Count);
