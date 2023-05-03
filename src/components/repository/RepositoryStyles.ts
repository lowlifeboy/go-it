import styled from 'styled-components';

export const RepositoryStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-gap: 32px;
  padding: 40px;
  background: #FFFFFF;
  border-radius: 16px;
  filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.04));
  box-sizing: border-box;

  .leftPart {
    display: grid;
    grid-template-columns: 128px 1fr;
    grid-gap: 32px; 

    .imageWrapper {
      display: grid;
      place-items: center;
      width: 128px;
      height: 144px;
      background: linear-gradient(321.69deg, #4481EB 0%, #04BEFE 100%);
      border-radius: 4px;
    }

    .textWrapper {
      h3 {
        margin-top: 2px;
        margin-bottom: 8px;
        font-family: 'DM Serif Display';
        font-size: 22px;
        line-height: 25px;
        color: #081F32;
      }

      p {
        margin-top: 0;
        margin-bottom: 2px;
        font-family: 'Open Sans';
        font-size: 16px;
        line-height: 25px;
        color: #A5ADBB;

        &:last-child {
          color: #6E798C;
        }
      }
    }
  }

  .rightPart {
    height: 100%;
    display: flex;
    align-items: flex-end;

    .paramsWrapper {
      & > div {
        display: flex;
      }

      .imageWrapper {
        width: 28px;
        height: 30px;
        margin-right: 12px;
        display: grid;
        place-items: center;
      }
    }

    p {
      margin: 0;
      font-family: 'Open Sans';
      font-weight: 600;
      font-size: 16px;
      line-height: 25px;
      color: #081F32;
    }

    .starsWrapper,
    .watchersWrapper {
      margin-top: 25px;
      display: flex;
      align-items: center;
    }
  }
`;