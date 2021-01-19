'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var PushPreview = function PushPreview(props) {
  var _props$appName = props.appName,
      appName = _props$appName === void 0 ? '' : _props$appName,
      title = props.title,
      message = props.message,
      iconUrl = props.iconUrl,
      buttons = props.buttons,
      imageUrl = props.imageUrl,
      subTitle = props.subTitle;
  return React.createElement("div", {
    className: 'test'
  }, React.createElement(Image, {
    className: 'image',
    src: imageUrl
  }), React.createElement("div", null, React.createElement(Image, {
    className: 'icon',
    src: iconUrl,
    fallbackSrc: 'https://raw.githubusercontent.com/notifo-io/notifo/main/media/logo-square.png'
  }), React.createElement("span", null, appName || 'Your App')), title && React.createElement("div", null, title), subTitle && React.createElement("div", null, subTitle), message && React.createElement("div", null, message), buttons && React.createElement("div", null, buttons.map(function (button, i) {
    return React.createElement("div", {
      key: i
    }, React.createElement(Image, {
      src: button.iconUrl
    }), button.title);
  })));
};

var Image = function Image(_ref) {
  var src = _ref.src,
      fallback = _ref.fallbackSrc,
      className = _ref.className;

  var _React$useState = React.useState(false),
      isLoaded = _React$useState[0],
      setIsLoaded = _React$useState[1];

  var _React$useState2 = React.useState(src),
      imageSource = _React$useState2[0],
      setImageSource = _React$useState2[1];

  React.useEffect(function () {
    setImageSource(src || fallback);
    setIsLoaded(false);
  }, [src, fallback]);
  var setLoaded = React.useCallback(function () {

    setIsLoaded(true);
  }, [imageSource, src]);
  var onError = React.useCallback(function () {
    if (fallback) {
      setImageSource(fallback);
    }
  }, [fallback]);
  var style = isLoaded ? {} : {
    display: 'none'
  };
  return React.createElement("div", {
    className: className,
    style: style
  }, React.createElement("img", {
    src: src,
    onLoad: setLoaded,
    onError: onError
  }));
};

exports.PushPreview = PushPreview;
//# sourceMappingURL=react-push-preview.cjs.development.js.map
