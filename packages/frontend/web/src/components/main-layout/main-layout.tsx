import { ReactNode } from "react";
import { makeStyles, Container } from '@ui-lib';
import MainHeader from '../header/header';


interface LayoutProps {
  children: ReactNode;
  // country: string;
  // language: string;
}

const useStyles = makeStyles(() => ({
  mainContainer: {
    minHeight: '100vh',
    paddingTop: '5px',
  },
}));

const MainLayout = (props: LayoutProps) => {
  const classes = useStyles({});
  return (
    <>
      <MainHeader />
      <Container className={classes.mainContainer}>{props.children}</Container>
      {/*<MainFooter country={country} language={language} />*/}
    </>
  );
};

export default MainLayout;
