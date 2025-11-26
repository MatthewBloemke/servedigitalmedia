import React from 'react';

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="mb-6 z-[2] relative">
      <h2 className="text-3xl font-semibold text-white">{title}</h2>

      <div className="w-16 h-[3px] bg-gradient-to-r from-[#8c52ff] to-[#fb5d00] rounded-full mt-2"></div>

      {subtitle && (
        <p className="text-gray-300 mt-3 text-sm max-w-xl">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
