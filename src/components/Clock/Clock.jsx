import { useState, useRef, useEffect } from 'react';
import s from './Clock.module.css';

const Clock = () => {
  const [time, setTime] = useState(() => new Date());

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      stop();
    };
  }, []);

  function stop() {
    clearInterval(intervalId.current);
  }

  return (
    <div className={s.container}>
      <p className={s.clock}>Current time: {time.toLocaleTimeString()}</p>
      <button onClick={stop} type="button">
        Stop
      </button>
    </div>
  );
};
export default Clock;

// class Clock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div className={s.container}>
//         <p className={s.clock}>
//           Current time: {this.state.time.toLocaleTimeString()}
//         </p>
//         <button onClick={this.stop} type="button">
//           Stop
//         </button>
//       </div>
//     );
//   }
// }

// export default Clock;
