import React from 'react';
import './Components.css'


interface LinkedItemProps {
  icon?: string;
  text: string;
  link: string;
}

const LinkedItem: React.FC<LinkedItemProps> = ({ icon, text, link }) => {
  return (
    <div className='linked-item'>
      <span>{icon}</span>
      <a href={link}>{text}</a>
    </div>
  );
};

export default LinkedItem;