import * as React from 'react';
import { Image } from '../Image';
import UpArrow from '../images/UpArrow';
import DownArrow from '../images/DownArrow';
import BellIcon from '../images/Bell';
import { PushPreviewProps } from '../PushPreviewProps';

export const AndroidPreview = (
  props: PushPreviewProps & { expanded: boolean; toggle: () => void }
) => {
  const {
    appName = '',
    buttons,
    expanded,
    imageUrl,
    message,
    subTitle,
    iconUrl,
    title,
    toggle,
  } = props;

  return (
    <div
      className={`test android ${expanded ? 'expanded' : 'minimum'}`}
      onClick={toggle}
    >
      <div className="main">
        <div className="header">
          <div className="app-meta">
            <BellIcon />
            <span className="app-name">{appName || 'Your App'}</span>
            <span className={`arrow-icon`}>
              {!expanded ? <DownArrow /> : <UpArrow />}
            </span>
          </div>
        </div>
        <div className="section">
          <div className="short-description">
            {title && <div className="title">{title}</div>}
            {subTitle && <div className="subtitle">{subTitle}</div>}
            {message && <div className="message">{message}</div>}
          </div>
          {!expanded && (
            <div className="image-preview-small">
              <Image src={iconUrl} />
            </div>
          )}
          {expanded && <Image className="image" src={imageUrl} />}
        </div>
        {expanded && buttons?.length ? (
          <div className="buttons">
            <div>
              {buttons.map((button: any, i: number) => (
                <div className="button" key={i}>
                  <Image src={button.iconUrl} />

                  {button.title}
                </div>
              ))}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
