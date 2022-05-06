import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Link = styled.div`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
  /* :active,
  :hover,
  :focus {
    /* composes: Link; */
  /* color: #2196f3; */
  /* } */
`;

export const LinkElem = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 26px;
  &.active {
    /* composes: link; */
    color: #2314f7;
  }
`;

// .activeLink {
//     composes: link;
//     color: #2196f3;
// }
