import { useRef, useState } from 'react';
import Confetti from 'react-confetti';

import './App.css';
import { TypeAnimation } from 'react-type-animation';

export const App = () => {
  const [show, setShow] = useState(false);
  const [run, setRun] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const start = () => setShow(true);

  return (
    <div className="wrapper">
      {!show && (
        <div className="start">
          <button className="start__button" onClick={start}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      )}
      {show && (
        <div className="container">
          <TypeAnimation
            className="title"
            sequence={[
              'С днём рождения',
              1000,
              'С днём рождения\nПидарас',
              300,
              'С днём рождения\nСерьожа',
              1000,
              () => {
                setRun(true);
                audioRef.current?.play();
              },
              'С днём рождения\nСерьожа\n🎉🎉🎉',
            ]}
            speed={1}
          />
        </div>
      )}
      <audio src="/audio.mp3" ref={audioRef} className="hidden" />
      <Confetti className="background" run={run} />
    </div>
  );
};
