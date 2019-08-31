import MainLayout from '../src/components/main-layout/main-layout';
import withI18n from '../src/utils/i18n/with-i18n';
import { Trans } from '@lingui/macro';

type HomeProps = {};

const Home = (props: HomeProps) => {
  return (
    <MainLayout>
      <Trans>Hello world</Trans>
    </MainLayout>
  );
};

Home.getInitialProps = async ({ reduxStore }) => {
  // await reduxStore.dispatch(fetchVerticals(channel, country, language));
  // await reduxStore.dispatch(fetchSlotItems(channel, country, language));
};

export default withI18n(Home);
