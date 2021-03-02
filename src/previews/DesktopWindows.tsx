import * as React from 'react';
import { Image } from '../Image';
import NextArrow from '../images/NextArrow';
import { PushPreviewProps } from '../PushPreviewProps';

export const DesktopWindows = (
  props: PushPreviewProps & { expanded: boolean; toggle: () => void }
) => {
  const {
    appName = '',
    expanded,
    iconUrl,
    imageUrl,
    message,
    title,
    buttons,
    toggle,
  } = props;

  return (
    <div
      className={`desktop-windows ${expanded ? 'expanded' : 'minimum'}`}
      onClick={toggle}
    >
      <div className="rpp-header">
        <Image className="rpp-image" src={imageUrl} />
      </div>
      <div className="rpp-section">
        <div className="rpp-icon">
          <Image className="rpp-image" src={iconUrl} />
        </div>
        <div className="rpp-content">
          <NextArrow />
          {title && <div className="rpp-title">{title}</div>}
          {message && <div className="rpp-message">{message}</div>}
          <div className="rpp-site-meta">
            Google Chrome • {appName || 'google.com'}
          </div>
        </div>
      </div>
      {buttons?.length ? (
        <div className="rpp-buttons">
          {buttons.map(
            (button: any, i: number) =>
              button.title && (
                <div className="rpp-button" key={i}>
                  <span>
                    <Image src={button.iconUrl} />
                    {button.title}
                  </span>
                </div>
              )
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
