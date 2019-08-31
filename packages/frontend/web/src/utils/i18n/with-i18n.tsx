import React from 'react';
import { I18nProvider } from '@lingui/react';
import { Catalogs } from '@lingui/core';

type WithI18nProps = {
  language: string;
  catalogs: Catalogs;
};

export default (Component, defaultLang = 'en') =>
  class WithI18n extends React.Component<WithI18nProps> {
    static async getInitialProps(ctx) {
      const language = ctx.query.lang || defaultLang;
      const [props, catalog] = await Promise.all([
        Component.getInitialProps ? Component.getInitialProps(ctx) : {},
        import(`../../../locale/${language}/messages.po`).then(m => m.default),
      ]);

      return {
        ...props,
        language,
        catalogs: {
          [language]: catalog,
        },
      };
    }

    render() {
      const { language, catalogs, ...restProps } = this.props;

      return (
        <I18nProvider language={language} catalogs={catalogs}>
          <Component {...restProps} />
        </I18nProvider>
      );
    }
  };
