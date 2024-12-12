import {
  shoppingRewardsData,
  subscriberBenefitsData,
  subscriptionRewardsData,
} from '@/app/Data/FeatureData';
import FeaturesTable from '../FeatureTable';

const Incentive = ({ selectedTab }) => {
  return (
    <div className="max-w-3xl text-black mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
      <FeaturesTable
        title="Enhanced Subscription Offering"
        subtitle="Turn your subscription into a powerhouse of value and exclusivity:"
        features={subscriberBenefitsData}
      />
      <FeaturesTable
        title="Loyalty That Rewards Your Choices"
        subtitle="Keep earning rewards that enhance your experience:"
        features={subscriptionRewardsData}
      />
      <FeaturesTable
        title="Discovery That Rewards"
        subtitle="Combine exploration with rewards for a seamless, satisfying journey:"
        features={shoppingRewardsData}
      />
    </div>
  );
};

export default Incentive;
