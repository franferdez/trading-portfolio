import React from 'react';
// import { Footer } from '../footer/footer';

type MainFooterProps = {
  country: string;
  language: string;
};

export default function MainFooter(props: MainFooterProps) {
  const { country, language } = props;

  return <footer />;
}
