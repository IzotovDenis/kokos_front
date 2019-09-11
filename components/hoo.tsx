import * as React from "react";

interface HooksExampleProps {
  id: number;
  title: string;
}

export default function HooksExample(props: HooksExampleProps) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLDivElement | null>(null);

  // start our timer
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  // measure our element
  React.useEffect(() => {
    if (ref.current) {
      console.log(ref.current.getBoundingClientRect());
    }
  }, [ref]);

  return <div ref={ref}>Count: {count}</div>;
}
