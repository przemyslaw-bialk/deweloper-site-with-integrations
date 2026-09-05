"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type Props = {
  value: number;
  suffix?: string;
  children: React.ReactNode;
};

const Counter = ({ value, suffix = "", children }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      <div className="text-3xl font-bold text-accent">
        {inView && <CountUp end={value} duration={2} />}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-muted tracking-wide">{children}</p>
    </div>
  );
};

export default Counter;
