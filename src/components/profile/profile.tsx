import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '../../ui/box/box';
import Container from '../../ui/container/container';
import { GithubIcon, SuitcaseIcon } from '../../ui/icons';
import Text from '../../ui/text';
import UiLink from '../../ui/ui-link';
import Banner from '../banner';
import NavigationTabs from '../navigation-tabs';
import image from './assets/img/photo.jpeg';
import {
  StyledProfilePicture,
  StyledProfileWrap,
} from './assets/profile.styles';

const Profile: FC = () => {
  const location = useLocation();

  const [currentTab, setCurrentTab] = useState('about');

  useEffect(() => {
    const formattedPathname = location.pathname.replace(/\//, '');
    setCurrentTab(formattedPathname);
  }, [location.pathname]);

  return (
    <div>
      <Banner />
      <Container>
        <StyledProfileWrap>
          <StyledProfilePicture>
            <img src={image} alt="Photo of Emilia" />
          </StyledProfilePicture>
          <div>
            <Text
              variant={'h3'}
              as={'h1'}
              sx={() => ({ fontSize: 28, lineHeight: 1.4 })}
            >
              Emilia Sonder
            </Text>
            <Text as={'h2'}>Front-end developer</Text>
          </div>
        </StyledProfileWrap>

        <Text sx={() => ({ marginTop: '10px' })}>
          <p>Passionate about clean code and delightful user experiences ✨</p>
          <p>
            Front-end developer. Back-end explorer. UX/UI enthusiast. Creative
            thinker.
          </p>
        </Text>
        <Box
          sx={() => ({
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          })}
        >
          <UiLink icon={<SuitcaseIcon />} label={'Available'} />
          <UiLink
            icon={<GithubIcon />}
            label={'Github'}
            href={'https://github.com/isemilia'}
          />
          {/*<UiLink*/}
          {/*  icon={<InstagramIcon />}*/}
          {/*  label={'Instagram'}*/}
          {/*  href={'https://www.instagram.com/coremilia'}*/}
          {/*/>*/}
        </Box>
        <NavigationTabs
          currentValue={currentTab}
          tabs={[
            { label: 'About', value: 'about', href: '' },
            { label: 'Skills', value: 'skills', href: '/skills' },
            { label: 'Projects', value: 'projects', href: '/projects' },
            { label: 'Contact', value: 'contact', href: '/contact' },
          ]}
          sx={() => ({ marginTop: '40px' })}
        />
      </Container>
    </div>
  );
};

export default Profile;
