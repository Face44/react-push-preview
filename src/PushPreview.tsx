import * as React from 'react';
import { IOSPreview } from './previews/IOSPreview';
import { AndroidPreview } from './previews/AndroidPreview';
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
    const { iconUrl, target, ...other } = this.props;

    const iconUrlOrDefault = iconUrl || DEFAULT_LOGO;

    return (
      <div className="preview-container">
        {target === 'MobileIOS' && (
          <IOSPreview
            {...other}
            iconUrl={iconUrlOrDefault}
            expanded={this.state.isExpanded}
            toggle={this.toggle}
          />
        )}

        {target === 'MobileAndroid' && (
          <AndroidPreview
            {...other}
            iconUrl={iconUrlOrDefault}
            expanded={this.state.isExpanded}
            toggle={this.toggle}
          />
        )}

        {target === 'Notifo' && <NotifoPreview {...other} iconUrl={iconUrl} />}
      </div>
    );
  }
}
