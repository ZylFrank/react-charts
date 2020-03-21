/* eslint-disable no-console */
import React, { memo, useState, forwardRef, useMemo, useRef } from 'react';

const Children1 = ({ text }) => {
  console.log('纯函数组件children1加载了');
  return <h2>子组件children1： {text}</h2>;
};

const Children2 = forwardRef(({ text }, ref) => {
  console.log('forwardRef子组件children2加载了');
  return <h2 ref={ref}>子组件children2： {text}</h2>;
});

const Children3 = memo(({ text }) => {
  console.log('memo组件children3加载了');
  return <h2>memo组件children3加载了： {text}</h2>;
});

const Children4 = memo(
  forwardRef(({ text }, ref) => {
    console.log('memo forwardRef组件children4加载了');
    return <h2 ref={ref}>memo forwardRef组件children4加载了： {text}</h2>;
  }),
  (perv, next) => {
    console.log(perv, next);
    return true;
  },
);

function Test() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const ref2 = useRef(null);
  const ref = useRef(null);
  const children1 = useMemo(() => <Children1 text={count1} />, [count1]);
  const children2 = useMemo(() => <Children2 text={count2} ref={ref2} />, [count2]);
  const ref4 = useMemo(() => ref, [ref]);

  return (
    <div>
      <h1>count1:{count1}</h1>
      <h1>count2:{count2}</h1>
      <h1>count3:{count3}</h1>
      {children1}
      {children2}
      <Children3 text={count3} />
      <Children4 text={count4} ref={ref4} />
      <button
        type="button"
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        children1
      </button>
      <button
        type="button"
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        children2
      </button>
      <button
        type="button"
        onClick={() => {
          setCount3(count3 + 1);
        }}
      >
        children3
      </button>
      <button
        type="button"
        onClick={() => {
          setCount4(count4 + 1);
        }}
      >
        children4
      </button>
    </div>
  );
}

export default Test;
