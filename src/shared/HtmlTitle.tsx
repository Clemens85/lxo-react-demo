import React from 'react';
import { Helmet } from 'react-helmet-async';

export type HtmlTitleProps = {
  title: string
}
export default function HtmlTitle({title}: HtmlTitleProps) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}