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
      className={`test desktop-windows ${expanded ? 'expanded' : 'minimum'}`}
      onClick={toggle}
    >
      <div className="header">
        <Image className="image" src={imageUrl} />
      </div>
      <div className="section">
        <div className="icon">
          <Image className="image" src={iconUrl} />
        </div>
        <div className="content">
          <NextArrow />
          {title && <div className="title">{title}</div>}
          {message && <div className="message">{message}</div>}
          <div className="site-meta">
            Google Chrome • {appName || 'google.com'}
          </div>
        </div>
      </div>
      {buttons?.length ? (
        <div className="buttons">
          {buttons.map(
            (button: any, i: number) =>
              button.title && (
                <div className="button" key={i}>
                  <Image src={button.iconUrl} />

                  {button.title}
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
