import * as React from 'react';

const HomeIcon: React.SFC = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-git-pull-request"
    >
      <circle cx={18} cy={18} r={3} />
      <circle cx={6} cy={6} r={3} />
      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <line x1={6} y1={9} x2={6} y2={21} />
    </svg>
  );
};

export default HomeIcon;
