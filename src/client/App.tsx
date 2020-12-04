import * as React from 'react';
import { KDImage } from '../KDImage/KDImage';
import './styles.scss';

export const App = (): React.ReactElement => {
  return (
    <div className={'container'}>
      <h2>Click an image to enlarge</h2>
      <div className={'images'}>
        {[...Array(20)].fill(0).map((_, i) => (
          <div key={i}>
            <KDImage
              src={`https://source.unsplash.com/random?sig=${i}`}
              height={'200px'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
