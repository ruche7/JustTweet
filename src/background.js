function onClicked(tab) {
  chrome.windows.get(tab.windowId, function(wnd) {
    var url =
      'https://twitter.com/intent/tweet?' +
      'text=' + encodeURIComponent(tab.title) +
      '&url=' + encodeURIComponent(tab.url);
    var w = 640;
    var h = 360;
    var x = wnd.left + (wnd.width - w) / 2;
    var y = wnd.top + (wnd.height - h) / 2;

    var param = {
      'url'    : url,
      'left'   : x,
      'top'    : y,
      'width'  : w,
      'height' : h,
      'type'   : 'popup',
    };
    chrome.windows.create(param);
  });
}

chrome.browserAction.onClicked.addListener(onClicked);

// vim:set ts=8 sts=2 sw=2 tw=0 et:
