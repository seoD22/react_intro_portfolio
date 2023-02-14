import {useEffect, useState} from 'react';
import Pre_PC from './Pre_PC'
import Pre_mobile from './Pre_mobile'

function Preinterview(props) {
  const [resize, setResize] = useState(null);

  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setResize(window.innerWidth);
    });

    const time = setTimeout(() => {
      console.log(window.innerWidth);
      setResize(window.innerWidth);
    }, 0.0001);

    return () => {
      window.removeEventListener("resize", () => {
        setResize(window.innerWidth);
      });

      clearTimeout(time);
    };
  }, []);


  return (
    <div id='preinterview' className='container_left'>
      <h2>Preinterview</h2>
      {
        resize <= 992
        ? <Pre_mobile></Pre_mobile> : <Pre_PC></Pre_PC>
      }
    </div>
  );
}

export default Preinterview;