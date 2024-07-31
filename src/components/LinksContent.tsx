import React from 'react';

interface LinksContentProps {
  reference: string;
  name: string;
}

const LinksContent: React.FC<{ links: LinksContentProps[] }> = ({ links }) => {

  return (
    <div className='links-content'>
      {links.map((link) => (
        <a href={link.reference}>{link.name}</a>
      ))}
    </div>
  );
};

export default LinksContent;