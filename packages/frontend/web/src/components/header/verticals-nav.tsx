import { List, ListItem, ListItemIcon, ListItemText } from '@ui-lib';
import { ChevronLeftIcon } from '@ui-icons';
import React from 'react';

type Props = {
  // verticals: Vertical[];
};

const VerticalsNav = ({}: Props) => {
  // if (!Array.isArray(verticals)) {
  //   return null;
  // }
  return (
    <List data-testid="nav-list">
      {/*{verticals.map((vertical, i) => (*/}
      {/*  <ListItem button key={`vertical-nav-${vertical.id}-${i}`} data-testid="nav-list-item">*/}
      {/*    <ListItemIcon>*/}
      {/*      <ChevronLeftIcon />*/}
      {/*    </ListItemIcon>*/}
      {/*    <ListItemText primary={vertical.name} />*/}
      {/*  </ListItem>*/}
      {/*))}*/}
    </List>
  );
};

export default VerticalsNav;
