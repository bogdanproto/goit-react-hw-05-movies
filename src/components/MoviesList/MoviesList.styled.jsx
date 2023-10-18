import styled from 'styled-components';

export const GalleryStyled = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 16px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
