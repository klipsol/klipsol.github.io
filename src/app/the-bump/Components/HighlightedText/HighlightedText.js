import { twMerge } from 'tailwind-merge';

const HighlightedText = ({ text, className = '', wrapperClass = '' }) => {
	return (
		<span className="relative">
			<span className={`relative font-bold z-10 ${className}`}>{text}</span>
			<span className={twMerge('absolute bottom-0 left-0 w-full h-[40%] bg-primary -z-0', wrapperClass)}></span>
		</span>
	);
};

export default HighlightedText;
