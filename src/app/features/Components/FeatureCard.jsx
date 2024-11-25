const FeatureCard = ({ index, title, features, iconSrc }) => {
  return (
    <div className="bg-[#FFFAE9] rounded-3xl p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-8">
        <div className="flex flex-col gap-4 w-48">
          <div className="text-[#F7BC31] text-2xl lg:text-4xl opacity-50 font-semibold">
            {index.toString().padStart(2, '0')}
          </div>
          <h3 className="font-bold text-xl lg:text-3xl text-[#1D234E]">
            {title}
          </h3>
          {iconSrc && (
            <div className="">
              <img src={iconSrc} alt={title} className="opacity-80" />
            </div>
          )}
        </div>

        <div className="h-[1px] lg:w-[1px] bg-gray-200"></div>

        <div className="flex-1 flex items-center">
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-[#003046] text-sm lg:text-lg font-medium">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FeatureCards = () => {
  const cards = [
    {
      index: 1,
      title: 'Key Features',
      iconSrc: '/key.svg',
      features: [
        'Customization and Widget Integration',
        'AI Ratings',
        'Catalog (Category + Brands)',
        'Inventory Management',
        'Order Tracking',
        'Customer Operations',
        'Accounting & Settlement',
        'Shipping Brand Selection',
      ],
    },
    {
      index: 2,
      title: 'Hosting & Security',
      iconSrc: '/security.svg',
      features: [
        'Cloud Hosting',
        'SSL Certificate',
        'Whitelisted UI + Own Domain Pointing',
        'Data encryption and security',
      ],
    },
    {
      index: 3,
      title: 'AI Engine & Analytics',
      iconSrc: '',
      features: [
        'AI-driven personalization',
        'AI-driven user product recommendations',
        'User funnel events',
        'Google Analytics integration',
        'Web CloudFlare Integration',
        'Real-Time Dashboards & KPIs',
      ],
    },
    {
      index: 4,
      title: 'Front-end Responsive-ness',
      iconSrc: '',
      features: [
        'AI-driven auto-population',
        'Mobile Responsiveness',
        'Customizable Themes',
        'Accessibility Features',
        'A/B testing modules',
        'Custom experiments',
      ],
    },
    {
      index: 5,
      title: 'Marketing',
      iconSrc: '',
      features: [
        'AI-driven pricing recommendations',
        'Marketing APIs for Acquiring External CTAs',
        'APIs & Web Hooks for Order Status &  Order Rifills',
        'Third Party Integrations',
        'Abandoned Cart APIs',
        'Remarketing & Retargeting APIs',
        'Webhook',
        'Customer Profiles/Personalization',
      ],
    },
    {
      index: 6,
      title: 'Delivery Intelligence',
      iconSrc: '',
      features: [
        'AI-based supply connection',
        'Fill-rate data',
        'Fill-rate corrective actions',
      ],
    },
    {
      index: 7,
      title: 'Loyalty / Rewards Management',
      iconSrc: '',
      features: [
        'Loyalty engine',
        'Earn and burn customization',
        'Cashback/ rewards automation',
      ],
    },
    {
      index: 8,
      title: 'Brand Intelligence & relations',
      iconSrc: '',
      features: [
        'AI driven brand + category management',
        'Deal-of-the-Day',
        'Special brand deals',
        'Discover Coupons',
        'High Discount + High Margin Deals',
        'Brand Launches',
        'Branding Budgets from Network',
        'Account Management',
        'Custom marketing events',
      ],
    },
    {
      index: 9,
      title: 'Catalog Management',
      iconSrc: '',
      features: [
        'AI enhanced catalog',
        'Catalog APIs',
        'Custom Catalog Enrichment',
      ],
    },
    {
      index: 10,
      title: 'Pricing Intelligence',
      iconSrc: '',
      features: [
        'Automated pricing',
        'AI driven price correction',
        'Custom pricing events',
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 lg:p-6">
      {cards.map((card) => (
        <FeatureCard
          key={card.index}
          index={card.index}
          title={card.title}
          features={card.features}
          iconSrc={card.iconSrc}
        />
      ))}
    </div>
  );
};

export default FeatureCards;
