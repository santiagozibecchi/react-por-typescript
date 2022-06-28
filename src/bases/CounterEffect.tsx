import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

const CounterEffect = () => {

     const [counter, setCounter] = useState(5);
     const counterElement = useRef<HTMLHeadingElement>(null);

     const handleClick = () => {

          setCounter(count => Math.min(count + 1, MAXIMUN_COUNT))

          // if (MAXIMUN_COUNT > counter) {
          //      setCounter(c => c + 1);
          // } else {
          //      return
          // }
     }

     useEffect(() => {

          if (counter < 10) return

          console.log('%cLLegaste al valor maximo', 'color: red;');

          const tl = gsap.timeline();

          tl.to(counterElement.current, { y: -100, duration: 0.5, ease: 'ease.out' })
               .to(counterElement.current, { y: 0, duration: 2, ease: 'bounce.out' })

          // gsap.to(counterElement.current, { y: -100, duration: 0.5, ease: 'ease.out' }).then(() => {
          //      gsap.to(counterElement.current, { y: 0, duration: 2, ease: 'bounce.out' })
          // })

     }, [counter]);


     return (
          <>
               <h1>CounterEffect:</h1>
               <h2 ref={counterElement}> {counter}</h2>

               <button
                    onClick={handleClick}
               >
                    +1
               </button>
          </>
     )
}

export default CounterEffect