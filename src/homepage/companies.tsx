import React from 'react';

interface ExperienceItem {
  company: string;
  location: string;
  duration: string;
  position?: string;
  description: (string | { [key: string]: (string | { text: string })[] })[];
}

interface CompanyDetailsProps {
  companyDetail: ExperienceItem;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ companyDetail }) => {
  const renderDescription = (description: ExperienceItem['description']) => {
    return description.map((item, index) => {
      if (typeof item === 'string') {
        return <p key={index}>{item}</p>;
      } else {
        return Object.entries(item).map(([key, value]) => (
          <div key={key}>
            <h3 className="font-bold mt-2">{key}</h3>
            <ul className="list-disc pl-5">
              {value.map((subItem, subIndex) => (
                <li key={subIndex} className='text-gray-600 text-lg'>
                  {typeof subItem === 'string' ? subItem : subItem.text}
                </li>
              ))}
            </ul>
            <div className='h-10'></div>
          </div>
        ));
      }
    });
  };

  return (
    <div className="flex flex-row items-start justify-start gap-10 mb-10">
      <div className="backdrop-filter bg-white bg-opacity-30 rounded-lg flex flex-col justify-start items-start p-10 gap-2 w-full max-w-md">
        <h1 className='text-gray-700 text-3xl font-bold font-serif'>{companyDetail.company}</h1>
        <h2 className="text-lg">{companyDetail.location} 📍</h2>
        <h2 className="text-md">{companyDetail.duration}</h2>
        {companyDetail.position && <h2 className="text-md">{companyDetail.position}</h2>}
      </div>
      <div className="text-gray-600 text-lg">
        {renderDescription(companyDetail.description)}
      </div>
    </div>
  );
};

export default CompanyDetails;