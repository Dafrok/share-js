export default function () {
  function setShareData(cmd, config) {
    config = window._bd_share_config.common;
    return config;
  }
  window._bd_share_config = {
    common: {
        onBeforeClick: setShareData
    },
    share: [{
        bdSize: 0
    }]
  };
  document.getElementsByTagName('head')[0].appendChild(
    document.createElement('script')).src = 'http://bdimg.share.baidu.com/'
    + 'static/api/js/share.js?v=89860593.js?cdnversion='
    + ~(-new Date() / 36e5);
}