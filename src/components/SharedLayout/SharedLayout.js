import { useAuth } from 'hooks/useAuth';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Container,
  Header,
  Logo,
  LogoBlack,
} from './SharedLayout.styled';

export const SharedLayout = () => {
const {isLoggedIn} = useAuth();
  return (
    <>
      <Container>
        <Header>
          <Navigation/>
          <Logo>
            Phone<LogoBlack>book</LogoBlack>
          </Logo>
          {isLoggedIn ? <UserMenu/> : <AuthNav/>}

        </Header>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
