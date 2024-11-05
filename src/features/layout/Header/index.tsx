import CloseIcon from '@assets/icons/navigation/menu-close.svg?react';
import MenuIcon from '@assets/icons/navigation/menu-open.svg?react';
import Button from '@components/common/Button';
import { Flex, Image } from '@/components/common';
import useToggle from '@/hooks/useToggle';
import LanguageFilter from './components/LanguageFilter';
import {
  commonButtonStyle,
  customButtonStyle,
  flexStyle,
  HeaderContainer,
  imageStyle,
  LogoImg,
  menuIconStyle,
  Nav,
} from './index.styles';
import { startTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';
import { useUser } from '@/components/providers/User.provider';
import { userLocalStorage } from '@/utils/storage';

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, toggleMenu] = useToggle();
  const { user, setUser } = useUser();

  const goToHome = () => {
    startTransition(() => {
      navigate(ROUTE_PATH.HOME);
    });
  };

  const login = () => {
    navigate(ROUTE_PATH.AUTH.SIGN_IN);
  };

  const logout = () => {
    userLocalStorage.removeToken();
    userLocalStorage.removeUser();
    setUser(undefined);
    navigate(ROUTE_PATH.HOME);
  };

  const goToPostNotice = () => {
    navigate(ROUTE_PATH.POST_NOTICE);
  };

  const goToMyPage = () => {
    if (user?.type === 'employer') {
      navigate(ROUTE_PATH.MY_PAGE.EMPLOYER);
    } else if (user?.type === 'employee') {
      navigate(ROUTE_PATH.EMPLOYEE.EMPLOYEE_PAGE);
    }
  };

  return (
    <HeaderContainer>
      <Flex justifyContent="space-between" alignItems="center" css={flexStyle}>
        <LogoImg onClick={goToHome} />
        <Flex justifyContent="flex-end" css={menuIconStyle} onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </Flex>
        <Nav open={menuOpen}>
          <LanguageFilter />
          {!user ? (
            <Button style={customButtonStyle} onClick={login}>
              로그인
            </Button>
          ) : (
            <>
              {user.type === 'employer' && (
                <Button design="outlined" style={commonButtonStyle} onClick={goToPostNotice}>
                  채용공고 등록
                </Button>
              )}
              <Flex justifyContent="center" alignItems="center" onClick={goToMyPage}>
                <Image url={user.profileImage} size={{ width: '40px', height: '40px' }} css={imageStyle} />
              </Flex>
              <Button style={customButtonStyle} onClick={logout}>
                로그아웃
              </Button>
            </>
          )}
        </Nav>
      </Flex>
    </HeaderContainer>
  );
}
