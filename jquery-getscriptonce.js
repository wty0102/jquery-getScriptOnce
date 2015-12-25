/**
 * 非同步取得JS檔，只請求一次，與jQuery原生getScript方法不同。
 */
jQuery.extend({
	getScriptOnce:function(url, successCallback) {
		var root = (window.queueGetScriptOnce||(window.queueGetScriptOnce={}));
		var queueWrapper = (root[url]||(root[url]={}));
		var loaded = (queueWrapper.loaded||(queueWrapper.loaded=0));
		if(loaded==1) {
			while(queueWrapper.queue.length>0) {
				queueWrapper.queue.shift()();
			}
			successCallback();
		} else {
			if(!queueWrapper.loadedCallback) {
				queueWrapper.loadedCallback = function() {
					var o = window.queueGetScriptOnce[url];
					o.loaded = 1;
					while(o.queue.length>0) {
						o.queue.shift()();
					}
				};
				jQuery.getScript(url, queueWrapper.loadedCallback);
			}
			
			var queue = (queueWrapper.queue||(queueWrapper.queue=[]));
			queue.push(successCallback);
		}
	}
});