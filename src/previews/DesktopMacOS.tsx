import * as React from 'react';
import { Image } from '../Image';
import Chrome from '../images/Chrome';
import { PushPreviewProps } from '../PushPreviewProps';

export const DesktopMacOS = (
  props: PushPreviewProps & { expanded: boolean; toggle: () => void }
) => {
  const { appName = '', expanded, iconUrl, message, title, toggle } = props;

  return (
    <div
      className={`test desktop-macos ${expanded ? 'expanded' : 'minimum'}`}
      onClick={toggle}
    >
      <div className="main">
        <div className="icon-container">
          <Chrome />
        </div>
        <div className="content-container">
          {title && <div className="title">{title}</div>}
          <div className="site">{appName || 'example.com'}</div>
          {message && <div className="message">{message}</div>}
        </div>
        <div className="app-logo-container">
          <Image className="icon" src={iconUrl} fallbackSrc={iconUrl} />
        </div>
      </div>
    </div>
  );
};
