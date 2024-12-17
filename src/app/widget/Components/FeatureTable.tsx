import { twMerge } from 'tailwind-merge';

const FeaturesTable = ({
  features,
  title = '',
  subtitle = '',
  className = '',
}) => {
  return (
    <div
      className={twMerge(
        'max-w-3xl mx-auto rounded-2xl bg-white my-10',
        className
      )}
    >
      <h4 className="text-2xl font-semibold">{title}</h4>
      <h5 className="text-base font-medium">{subtitle}</h5>
      {title && <div className="bg-[#04133a] h-[1px] mt-1 mb-4"></div>}
      <div className="overflow-x-auto">
        <table className="w-full my-4 border-separate border-spacing-0 rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left text-sm font-semibold text-gray-700 py-3 px-6">
                Features
              </th>
              <th className="text-left text-sm font-semibold text-gray-700 py-3 px-6">
                Benefits
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((item, index) => (
              <tr
                key={index}
                className="bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                <td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
                  {item.feature}
                </td>
                <td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
                  {item.benefit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeaturesTable;
