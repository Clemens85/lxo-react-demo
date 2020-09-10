import React from "react";
import {useTranslation} from "react-i18next";
import {ExampleInfo} from "../../shared/ExampleInfo";

export default function I18nHandlingBasic() {

  const {t, i18n} = useTranslation(['common', 'demo']);

  const currentSelectedLanguage = i18n.language.toUpperCase();

  return (
      <div>
        <ExampleInfo nr={1} helpLinks={["https://react.i18next.com/"]}>{t('common:explanation')}</ExampleInfo>
          <div style={{margin: "15px"}}>{t('demo:hello_world')}</div>
          <div style={{margin: "15px"}}>{t('demo:hello_world_interpolation', {usedLanguage: currentSelectedLanguage})}</div>
        <LanguageSwitch />
      </div>

  );
}

function LanguageSwitch() {

  const { i18n } = useTranslation();

  function handleClick(newLanguage: string) {
    i18n.changeLanguage(newLanguage);
  }

  function isLanguageSelected(language: string): boolean {
    return i18n.language === language;
  }

  return (
    <div>
      <button onClick={() => handleClick('de')} disabled={isLanguageSelected('de')}>DE</button>
      <button onClick={() => handleClick('en')} disabled={isLanguageSelected('en')}>EN</button>
    </div>
  );
}