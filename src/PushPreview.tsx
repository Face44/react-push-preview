import * as React from 'react';
import { IOSPreview } from './previews/IOSPreview';
import { NotifoPreview } from './previews/NotifoPreview';
import { PushPreviewProps } from './PushPreviewProps';

const DEFAULT_LOGO =
  'https://raw.githubusercontent.com/notifo-io/notifo/main/media/logo-square.png';

interface State {
  isExpanded: boolean;
}

// I had issues with hooks, therefor I use class component here.
export class PushPreview extends React.Component<PushPreviewProps, State> {
  constructor(props: PushPreviewProps) {
    super(props);

    this.state = { isExpanded: false };
  }

  public toggle = () => {
    this.setState(s => ({ isExpanded: !s.isExpanded }));
  };

  public render() {
    const { imageUrl, target, ...other } = this.props;

    const url = imageUrl || DEFAULT_LOGO;

    return (
      <div className="preview-container">
        {target === 'MobileIOS' && (
          <IOSPreview
            {...other}
            imageUrl={url}
            expanded={this.state.isExpanded}
            toggle={this.toggle}
          />
        )}

        {target === 'Notifo' && <NotifoPreview {...other} imageUrl={url} />}
      </div>
    );
  }
}
