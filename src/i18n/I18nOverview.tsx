import React from "react";
import HtmlTitle from "../shared/HtmlTitle";
import './I18nConfig';
import {useTranslation} from "react-i18next";
import I18nHandlingBasic from "./examples/I18nHandlingBasic";

export default function I18nOverview() {

  const {t} = useTranslation();

  return (
      <>
        <HtmlTitle title={t('page_title')}/>
        <section>
          <I18nHandlingBasic />
        </section>
      </>
  );
}