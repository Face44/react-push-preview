import * as React from 'react';

interface ImageProps {
  className?: string;

  // The fallback source.
  fallbackSrc?: string;

  // The source of the image.
  src?: string;

  // The source of the image.
  alt?: string;
}

interface ImageState {
  // True if loaded.
  isLoaded: boolean;

  // The source of the image.
  src?: string;
}

export class Image extends React.PureComponent<ImageProps, ImageState> {
  constructor(props: ImageProps) {
    super(props);

    const src = props.src || props.fallbackSrc;

    this.state = { src, isLoaded: false };
  }

  static getDerivedStateFromProps(
    nextProps: ImageProps,
    prevState: ImageState
  ) {
    const src = nextProps.src || nextProps.fallbackSrc;

    if (src !== prevState.src) {
      return { src, isLoaded: false };
    }

    return null;
  }

  private onLoaded = () => {
    this.setState({ isLoaded: true });
  };

  private onError = () => {
    const fallback = this.props.fallbackSrc;

    if (fallback) {
      this.setState({ src: fallback, isLoaded: false });
    }
  };

  public render() {
    const style = this.state.isLoaded ? {} : { display: 'none' };

    return (
      <div className={this.props.className} style={style}>
        <img
          alt={this.props.alt}
          src={this.state.src}
          onLoad={this.onLoaded}
          onError={this.onError}
        />
      </div>
    );
  }
}
