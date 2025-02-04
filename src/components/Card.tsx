import React, { ReactNode } from 'react';
import './Components.css'


interface CardProps {
  title: string;
  children: ReactNode[];
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className='card-item'>
      <h4>{title}</h4>
      {children}
    </div>
    );
};

export default Card;