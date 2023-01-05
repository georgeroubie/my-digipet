import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: ${({ theme: { heights, spacing } }) => `calc(100% - ${heights.menu} - ${spacing.large})`};
  border: ${({ theme: { colors, shapes } }) => `${shapes.divider} solid ${colors.borderPrimary}`};
`;

const Play = () => {
  return <Wrapper>To be continued</Wrapper>;
};

export default Play;
