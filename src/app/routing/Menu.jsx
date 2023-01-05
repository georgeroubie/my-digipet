import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme: { spacing } }) => spacing.normal};
  height: ${({ theme: { heights } }) => heights.menu};
`;

const NavLink = styled(_NavLink)`
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.textPrimary};

  &.active {
    text-decoration: underline;
  }
`;

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/play', label: 'Play' },
  { path: '/info', label: 'Info' },
  { path: '/settings', label: 'Settings' },
];

const Menu = () => {
  return (
    <Wrapper>
      {menuItems.map(({ path, label }) => (
        <NavLink key={path} to={path} end>
          {label}
        </NavLink>
      ))}
    </Wrapper>
  );
};

export default Menu;
