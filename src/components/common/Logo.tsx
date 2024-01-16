import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SVG = styled.svg`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

type Props = {
  variant?: 'primary' | 'secondary';
};

const Logo = ({ variant = 'primary' }: Props) => {
  return (
    <Link to="/home">
      <SVG viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          width="40"
          height="40"
          rx="12"
          fill={
            variant === 'primary'
              ? 'var(--color-action)'
              : 'var(--color-action-light)'
          }
        />
        <path
          d="M8.79883 8.89566V13.9857V14.0884V13.9857C8.79883 15.439 9.43295 16.7258 10.4161 17.5585C10.8969 17.9658 11.2145 18.5156 11.2145 19.1259V27.6223C11.2145 28.5668 12.0262 29.3334 13.0263 29.3334C14.0264 29.3334 14.838 28.5668 14.838 27.6223V19.1259C14.838 18.5156 15.1557 17.9658 15.6364 17.5585C16.6196 16.7258 17.2537 15.439 17.2537 13.9857V8.89566V13.9857"
          stroke={
            variant === 'primary'
              ? 'var(--color-white-2)'
              : 'var(--color-action)'
          }
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.0254 14.5038V8.79999"
          stroke={
            variant === 'primary'
              ? 'var(--color-white-2)'
              : 'var(--color-action)'
          }
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.3322 9.99973C29.3322 9.37004 28.7911 8.85898 28.1243 8.85898H26.9165C24.9151 8.85898 23.293 10.391 23.293 12.2812V19.1258C23.293 20.6133 24.3039 21.867 25.7087 22.3381V27.6221C25.7087 28.5667 26.5203 29.3332 27.5204 29.3332C28.5205 29.3332 29.3322 28.5667 29.3322 27.6221V22.548V9.99973Z"
          stroke={
            variant === 'primary'
              ? 'var(--color-white-2)'
              : 'var(--color-action)'
          }
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVG>
    </Link>
  );
};

export default Logo;
