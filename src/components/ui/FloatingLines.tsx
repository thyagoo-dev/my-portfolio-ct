import { motion } from 'framer-motion';

export const FloatingLines = () => {
  return (
    <div className="floating-lines-container" aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="floating-lines-svg"
      >
        <motion.path
          d="M-100 600C200 400 600 800 1440 200"
          stroke="rgba(245, 158, 11, 0.1)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M-50 700C300 500 700 900 1500 300"
          stroke="rgba(245, 158, 11, 0.08)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 7, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M0 850C400 650 800 950 1440 450"
          stroke="rgba(217, 119, 6, 0.05)"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 6, delay: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M-200 400C100 200 500 600 1200 -100"
          stroke="rgba(245, 158, 11, 0.05)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 8, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </svg>
      
      <style>{`
        .floating-lines-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        .floating-lines-svg {
          width: 100%;
          height: 100%;
          filter: blur(1px);
        }
      `}</style>
    </div>
  );
};
