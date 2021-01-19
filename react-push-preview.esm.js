import { createElement, useState, useEffect, useCallback } from 'react';

var PushPreview = function PushPreview(props) {
  var _props$appName = props.appName,
      appName = _props$appName === void 0 ? '' : _props$appName,
      title = props.title,
      message = props.message,
      iconUrl = props.iconUrl,
      buttons = props.buttons,
      imageUrl = props.imageUrl,
      subTitle = props.subTitle;
  return createElement("div", {
    className: 'test'
  }, createElement(Image, {
    className: 'image',
    src: imageUrl
  }), createElement("div", null, createElement(Image, {
    className: 'icon',
    src: iconUrl,
    fallbackSrc: 'https://raw.githubusercontent.com/notifo-io/notifo/main/media/logo-square.png'
  }), createElement("span", null, appName || 'Your App')), title && createElement("div", null, title), subTitle && createElement("div", null, subTitle), message && createElement("div", null, message), buttons && createElement("div", null, buttons.map(function (button, i) {
    return createElement("div", {
      key: i
    }, createElement(Image, {
      src: button.iconUrl
    }), button.title);
  })));
};

var Image = function Image(_ref) {
  var src = _ref.src,
      fallback = _ref.fallbackSrc,
      className = _ref.className;

  var _React$useState = useState(false),
      isLoaded = _React$useState[0],
      setIsLoaded = _React$useState[1];

  var _React$useState2 = useState(src),
      imageSource = _React$useState2[0],
      setImageSource = _React$useState2[1];

  useEffect(function () {
    setImageSource(src || fallback);
    setIsLoaded(false);
  }, [src, fallback]);
  var setLoaded = useCallback(function () {

    setIsLoaded(true);
  }, [imageSource, src]);
  var onError = useCallback(function () {
    if (fallback) {
      setImageSource(fallback);
    }
  }, [fallback]);
  var style = isLoaded ? {} : {
    display: 'none'
  };
  return createElement("div", {
    className: className,
    style: style
  }, createElement("img", {
    src: src,
    onLoad: setLoaded,
    onError: onError
  }));
};

export { PushPreview };
//# sourceMappingURL=react-push-preview.esm.js.map
