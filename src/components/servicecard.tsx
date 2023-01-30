import { makeStyles, shorthands, Button, Caption1, Text, tokens, Menu, MenuTrigger, MenuPopover, MenuList, MenuItem } from '@fluentui/react-components';
import { Card, CardHeader } from '@fluentui/react-components/unstable';

import * as React from 'react';
import { MoreHorizontal20Filled } from '@fluentui/react-icons';
import SunLogo from './sun.svg';

const resolveAsset = (asset: string) => {
  const ASSET_URL = 'https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/';
  return `${ASSET_URL}${asset}`;
};
const useStyles = makeStyles({
  main: {
    ...shorthands.gap('36px'),
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: '8px',
  },
  section: {
    width: 'fit-content',
  },
  title: {
    ...shorthands.margin(0, 0, '12px'),
  },
  verticalCard: {
    width: '80%',
    maxWidth: '100%',
    height: 'fit-content',
  },
  headerImage: {
    ...shorthands.borderRadius('4px'),
    maxWidth: '42px',
    maxHeight: '42px',
  },
  defaultCardImage: {
    ...shorthands.borderRadius('4px'),
    maxWidth: '32px',
    maxHeight: '32px',
  },
  caption: {
    color: tokens.colorNeutralForeground3,
  },
  text: {
    ...shorthands.margin(0),
  },
});

type ServiceCardProps = {
  title: string;
  subtitle: string;
  description: string;
  onSelect: React.MouseEventHandler;
  isDefault: boolean;
};
export const ServiceCard = (props: ServiceCardProps) => {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <section className={styles.section}>
        <Card className={styles.verticalCard}>
          <CardHeader
            image={<img alt="app logo" src={resolveAsset('app_logo.svg')} className={styles.headerImage} />}
            header={
              <div>
                <Text weight="semibold">{props.title}</Text>
              </div>
            }
            description={<Caption1 className={styles.caption}>{props.subtitle}</Caption1>}
            action={
              <Menu>
                <MenuTrigger disableButtonEnhancement>
                  <div>
                    {props.isDefault ? <img alt="app logo" src={SunLogo} className={styles.defaultCardImage} /> : <div />}
                    <Button appearance="transparent" icon={<MoreHorizontal20Filled />} aria-label="More options" />
                  </div>
                </MenuTrigger>
                <MenuPopover>
                  <MenuList>
                    <MenuItem onMouseDown={props.onSelect}>Select</MenuItem>
                    <MenuItem onMouseDown={props.onSelect}>Set as default</MenuItem>
                  </MenuList>
                </MenuPopover>
              </Menu>
            }
          />
          <p className={styles.text}>{props.description}</p>
        </Card>
      </section>
    </div>
  );
};
