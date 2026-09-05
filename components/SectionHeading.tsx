'use client';

import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  heading,
  description,
  centered = false,
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-sm font-bold text-orange mb-2 uppercase tracking-wide">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
        {heading}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
