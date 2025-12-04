import React from 'react';
import { ACHIEVEMENTS_DATA } from '../constants';
import { motion } from 'framer-motion';

const useCounter = (end: number, duration: number = 2, isInView: boolean) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);
            
            setCount(Math.floor(end * percentage));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        if (isInView) {
            animationFrame = requestAnimationFrame(animate);
        }

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isInView]);

    return count;
};

const CounterValue = ({ value, suffix }: { value: number, suffix?: string }) => {
    const [startCount, setStartCount] = React.useState(false);
    const count = useCounter(value, 2, startCount);

    return (
        <motion.span 
            onViewportEnter={() => setStartCount(true)}
            viewport={{ once: true }}
            className="text-5xl font-display font-bold text-white block mb-2"
        >
            {count}{suffix}
        </motion.span>
    );
}

const Achievements: React.FC = () => {
  return (
    <section className="bg-industrial-500/90 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-dark-950/20">
            {ACHIEVEMENTS_DATA.map((item, index) => (
                <div key={index} className="pt-8 md:pt-0">
                    <CounterValue value={item.value} suffix={item.suffix} />
                    <p className="text-dark-950 font-bold text-base">{item.label}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;