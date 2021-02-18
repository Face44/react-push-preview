import * as React from 'react';
import { Image } from '../Image';
import Chrome from '../images/Chrome';
import { PushPreviewProps } from '../PushPreviewProps';

export const DesktopMacOS = (
  props: PushPreviewProps & { expanded: boolean; toggle: () => void }
) => {
  const { expanded, iconUrl, message, title, website, toggle } = props;

  return (
    <div
      className={`desktop-macos ${expanded ? 'expanded' : 'minimum'}`}
      onClick={toggle}
    >
      <div className="rpp-main">
        <div className="rpp-icon-container">
          <Chrome />
        </div>
        <div className="rpp-content-container">
          {title && <div className="rpp-title">{title}</div>}
          <div className="rpp-site">{website}</div>
          {message && <div className="rpp-message">{message}</div>}
        </div>
        <div className="rpp-app-logo-container">
          <Image className="rpp-icon" src={iconUrl} fallbackSrc={iconUrl} />
        </div>
      </div>
    </div>
  );
};
