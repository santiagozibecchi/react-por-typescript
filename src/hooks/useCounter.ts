import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

interface HookProps {
     maxCount: number
}

export const useCounter = ({ maxCount = 10 }: HookProps) => {

     const [counter, setCounter] = useState(5);
     
     const elementToAnimated = useRef<any>(null);
     // const counterElement = useRef<HTMLButtonElement>(null);
     // para que sea lo mas flexible se podria agregar <any>


     // Esta referencia solo se crea la primera vez que se renderiza y se almacena la ref en memoria
     const timeLineRef = useRef(gsap.timeline());

     const handleClick = () => {
          setCounter(count => Math.min(count + 1, maxCount))
     }

     useLayoutEffect(() => {

          // Validacion por si el elemento que viene no tiene referencia ({target})
          if (!elementToAnimated.current) return;

          timeLineRef.current.to(elementToAnimated.current, { y: -10, duration: 0.5, ease: 'ease.out' })
               .to(elementToAnimated.current, { y: 0, duration: 2, ease: 'bounce.out' })
               .pause()

     }, [])

     useEffect(() => {
          // asi como esta, este timeline se esta inicializando cada vez que el counter se dispara
          // puedo crear otro useRef para mantener la referencia al time line
          // const tl = gsap.timeline();

          //      timeLineRef.current.to(counterElement.current, { y: -10, duration: 0.5, ease: 'ease.out' })
          //           .to(counterElement.current, { y: 0, duration: 2, ease: 'bounce.out' })

          //  Para que solo salte en el valor maximo
          // if (counter < maxCount) return;

          timeLineRef.current.play(0);

     }, [counter]);

     return {
          handleClick,
          counter,
          elementToAnimated,
     };
};