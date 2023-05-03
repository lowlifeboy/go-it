import React from 'react'
import { RepositoryStyles } from './RepositoryStyles';
import { ReactLogo, StarIcon, UserIcon } from '../../assets/images';

interface RepositoryProps {
  data: any;
}

export default function Repository({ data }: RepositoryProps) {
  return (
    <RepositoryStyles>
      <div className="leftPart">
        <div className="imageWrapper">
          <img src={ReactLogo} alt="Repository logo" />
        </div>

        <div className="textWrapper">
          <h3>{data.full_name.split('/')[1]}</h3>
          <p>{data.full_name.split('/')[0]}</p>
          <p>{data.language}</p>
          <p>{data.description}</p>
        </div>
      </div>

      <div className="rightPart">
        <div className="paramsWrapper">
          <div className="starsWrapper">
            <div className="imageWrapper">
              <img src={StarIcon} alt="Star icon" />
            </div>
            <p>{data.open_issues} <span>stars</span></p>
          </div>
          <div className="watchersWrapper">
            <div className="imageWrapper">
              <img src={UserIcon} alt="User icon" />
            </div>
            <p>{`${data.watchers_count} watchers`}</p>
          </div>
        </div>
      </div>
    </RepositoryStyles>
  )
}
