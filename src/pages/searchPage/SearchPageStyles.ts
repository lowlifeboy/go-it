import styled from 'styled-components';

export const SearchPageStyles = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 54px 116px;
  background-color: #fff;
  box-sizing: border-box;

  .container {
    width: 100%;
    max-width: 1340px;
  }

  .repositoriesWrapper {
    display: grid;
    grid-gap: 36px;
    margin-bottom: 43px;
  }
`;