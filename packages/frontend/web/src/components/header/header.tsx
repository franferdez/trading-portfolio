import React from 'react';
import Link from 'next/link';
import { MenuIcon, ChevronLeftIcon } from '@ui-icons';
import { Theme, makeStyles, Drawer, Divider, Toolbar, IconButton, AppBar, Button } from '@ui-lib';
// import { useTrackedState } from 'reactive-react-redux';
// import VerticalsNav from './verticals-nav';
// import VerticalsNavBar from './verticals-nav-bar';
// import { ReduxState } from '../../store/store';
// import { getStaticResourceUrl } from '../../utils/urls';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 1,
    position: 'relative',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  mainLogo: {
    display: 'block',
    height: '25px',
    maxWidth: '100%',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export type MainHeaderProps = {
  // country: string;
  // language: string;
};

export default function MainHeader(props: MainHeaderProps) {
  const classes = useStyles({});

  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open} className={classes.drawer}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {/*<VerticalsNav verticals={verticals} />*/}
      </Drawer>
      {/*<VerticalsNavBar verticals={verticals} />*/}
    </header>
  );
}
