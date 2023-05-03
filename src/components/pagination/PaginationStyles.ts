import styled from 'styled-components';

export const PaginationStyles = styled.div`
  display: flex;
  justify-content: center;

  & > button {
    font-family: 'Archivo';
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    background-color: transparent;
    padding: 0;
    border: none;
    outline: none;
    cursor: pointer;

    .disabled {
      color: #555;
    }
  }

  .pagination {
    margin-left: 36px;
    margin-right: 36px;
    display: flex;
    justify-content: center;
    gap: 8px;

    button {
      min-width: 30px;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 0;

      font-family: 'Archivo';
      font-weight: 600;
      font-size: 18px;
      line-height: 20px;
      color: #000000;

      &.active {
        border-bottom: 3px solid #65B79A;
      }
    }
  }

  .dots {
    color: #65B79A;
    font-size: 24px;
    width: 40px;
    display: flex;
    justify-content: center;
  }
`;