import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Container,
  Header,
  Logo,
  LogoBlack,
  StyledLink,
} from './SharedLayout.styled';

export const SharedLayout = () => {

  return (
    <>
      <Container>
        <Header>
          <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/contacts">Contacts</StyledLink>
          </nav>

          <Logo>
            Phone<LogoBlack>book</LogoBlack>
          </Logo>

          <AuthNav />
          {/* <UserMenu /> */}

        </Header>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
