import HighlightedText from '../publisher2/Components/HighlightedText/HighlightedText';
import Navbar from '../roi-calculator/Components/Navbar';
import FeatureCards from './Components/FeatureCard';

export default function features(params) {
  return (
    <main>
      <Navbar />
      <div className="relative sec-container flex flex-col lg:flex-row gap-y-4 mb-4">
        <div className="mt-6 lg:mt-0 lg:min-h-screen lg:w-1/2 lg:fixed lg:top-0 lg:left-0">
          <div className="text-[#1D234E] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2">
            <h1 className="lg:mb-10 mb-4 text-4xl lg:text-6xl title whitespace-nowrap">
              Install one time in <br />
              <HighlightedText
                text="less than 1 day."
                wrapperClass="bg-[#ffdf74] bottom-2 h-[35%]"
              />{' '}
            </h1>
            <p className="lg:text-4xl text-2xl">Get loads of features.</p>
            <p className="lg:text-4xl text-2xl font-bold">
              Pay zero upfront cost.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 lg:ml-auto p-0 lg:p-4">
          <FeatureCards />
        </div>
      </div>
    </main>
  );
}