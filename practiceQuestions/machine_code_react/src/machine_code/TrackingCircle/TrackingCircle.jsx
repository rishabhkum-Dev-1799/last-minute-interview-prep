import { useState, useRef, forwardRef, useEffect } from 'react';
import styles from './Tracking.module.css';

const Circle = forwardRef((props, ref) => (
  <div
    className={styles.circle}
    ref={ref}></div>
));

const TrackingCircle = () => {
  const circleRef = useRef();
  const [mouseevent,setMouseEvent]=useState()

  // handler functions
  const onMouseMovehandler = (event) => {
    // Providing a delay for 500 ms
    setInterval(() => {
        setMouseEvent(event)
    }, [200]);
  };


  useEffect(()=>{
        if(mouseevent){
            circleRef.current.style.left = `${mouseevent.clientX}px`;
            circleRef.current.style.top = `${mouseevent.clientY}px`;
        }
      ;
  },[mouseevent])

  return (
    <div
      onMouseMove={onMouseMovehandler}
      className={styles.main_container}>
      <Circle ref={circleRef} />
    </div>
  );
};

export default TrackingCircle;
