import { featuresData } from '@/app/Data/FeatureData';
import FeaturesTable from '../FeatureTable';

const MicrositeTab = ({ selectedTab }) => {
	return (
		<div className="max-w-3xl text-black mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
			<p>
				We can create a dedicated shoppable microsite for you in no time which can be accessed independently or
				integrated within your android or ios app in web view so that your user can shop without leaving the
				app.
			</p>
			<p className="my-8">Experience the microsite by clicking on the button below:</p>
			<a
				href="https://yourstore.dpanda.online/?user_id=1234567899"
				target="_blank"
				className="bg-blue-500 text-white rounded-md p-2 hover:underline"
			>
				Shop
			</a>
			<div>
				<FeaturesTable
					features={featuresData}
					title="AI-Powered Mobile-First Microsite with Native Personalization"
				/>
			</div>
		</div>
	);
};

export default MicrositeTab;
