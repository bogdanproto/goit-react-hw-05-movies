import styled from 'styled-components';

export const ItemCast = styled.li`
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  background-color: #ececec;

  img {
    width: auto;
    height: auto;
    object-fit: cover;

    border-radius: 8px;
  }
  p {
    display: block;
    padding: 4px;
    margin-top: auto;
    margin-bottom: auto;

    font-size: 8px;
    text-align: center;
  }

  h1 {
    font-size: 64px;
    text-align: center;
  }
`;
