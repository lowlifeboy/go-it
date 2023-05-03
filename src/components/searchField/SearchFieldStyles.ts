import styled from 'styled-components';

export const SearchFieldStyles = styled.div`
  margin-bottom: 36px;

  .fieldWrapper {
    display: flex;
    justify-content: center;
  }
  
  input {
    width: 100%;
    max-width: 1316px;
    height: 56px;
    background: #FFFFFF;
    border-radius: 4px;
    border: none;
    padding: 16px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 24px rgba(51, 51, 51, 0.24);

    &::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: rgba(17, 17, 17, 0.48);
    }
  }
`;