import * as React from 'react';
import { IOSPreview } from './previews/IOSPreview';
import { NotifoPreview } from './previews/NotifoPreview';
import { PushPreviewProps } from './PushPreviewProps';

const DEFAULT_LOGO =
  'https://raw.githubusercontent.com/notifo-io/notifo/main/media/logo-square.png';

export const PushPreview = (props: PushPreviewProps) => {
  if (!props.imageUrl) {
    props.imageUrl = DEFAULT_LOGO;
  }

  return (
    <div className="preview-container">
      {props.target === 'MobileIOS' && <IOSPreview {...props} />}

      {props.target === 'Notifo' && <NotifoPreview {...props} />}
    </div>
  );
};
