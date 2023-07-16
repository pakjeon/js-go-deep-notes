/*
 * :file description: 
 * :name: \js-go-deep-notes\专题系列\1.防抖.js
 * :author: PakJeon
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-07-07 13:21:51
 * :last editor: PakJeon
 * :date last edited: 2023-07-08 09:16:49
 */
function debounce(fn, wait, immediate) {
	var timer;

	return function () {
		var context = this;
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(context, arguments);
		}, wait)
	}
}