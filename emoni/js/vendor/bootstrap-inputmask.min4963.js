/*! HTML5Admin JS Generated File 2014 */
!function(a){var b=void 0!==window.orientation,c=navigator.userAgent.toLowerCase().indexOf("android")>-1,d=function(b,d){c||(this.$element=a(b),this.options=a.extend({},a.fn.inputmask.defaults,d),this.mask=String(d.mask),this.init(),this.listen(),this.checkVal())};d.prototype={init:function(){var b=this.options.definitions,c=this.mask.length;this.tests=[],this.partialPosition=this.mask.length,this.firstNonMaskPos=null,a.each(this.mask.split(""),a.proxy(function(a,d){"?"==d?(c--,this.partialPosition=a):b[d]?(this.tests.push(new RegExp(b[d])),null===this.firstNonMaskPos&&(this.firstNonMaskPos=this.tests.length-1)):this.tests.push(null)},this)),this.buffer=a.map(this.mask.split(""),a.proxy(function(a){return"?"!=a?b[a]?this.options.placeholder:a:void 0},this)),this.focusText=this.$element.val(),this.$element.data("rawMaskFn",a.proxy(function(){return a.map(this.buffer,function(a,b){return this.tests[b]&&a!=this.options.placeholder?a:null}).join("")},this))},listen:function(){if(!this.$element.attr("readonly")){var b=(navigator.userAgent.match(/msie/i)?"paste":"input")+".mask";this.$element.on("unmask",a.proxy(this.unmask,this)).on("focus.mask",a.proxy(this.focusEvent,this)).on("blur.mask",a.proxy(this.blurEvent,this)).on("keydown.mask",a.proxy(this.keydownEvent,this)).on("keypress.mask",a.proxy(this.keypressEvent,this)).on(b,a.proxy(this.pasteEvent,this))}},caret:function(a,b){if(0!==this.$element.length){if("number"==typeof a)return b="number"==typeof b?b:a,this.$element.each(function(){if(this.setSelectionRange)this.setSelectionRange(a,b);else if(this.createTextRange){var c=this.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select()}});if(this.$element[0].setSelectionRange)a=this.$element[0].selectionStart,b=this.$element[0].selectionEnd;else if(document.selection&&document.selection.createRange){var c=document.selection.createRange();a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length}return{begin:a,end:b}}},seekNext:function(a){for(var b=this.mask.length;++a<=b&&!this.tests[a];);return a},seekPrev:function(a){for(;--a>=0&&!this.tests[a];);return a},shiftL:function(a,b){var c=this.mask.length;if(!(0>a)){for(var d=a,e=this.seekNext(b);c>d;d++)if(this.tests[d]){if(!(c>e&&this.tests[d].test(this.buffer[e])))break;this.buffer[d]=this.buffer[e],this.buffer[e]=this.options.placeholder,e=this.seekNext(e)}this.writeBuffer(),this.caret(Math.max(this.firstNonMaskPos,a))}},shiftR:function(a){for(var b=this.mask.length,c=a,d=this.options.placeholder;b>c;c++)if(this.tests[c]){var e=this.seekNext(c),f=this.buffer[c];if(this.buffer[c]=d,!(b>e&&this.tests[e].test(f)))break;d=f}},unmask:function(){this.$element.unbind(".mask").removeData("inputmask")},focusEvent:function(){this.focusText=this.$element.val();var a=this.mask.length,b=this.checkVal();this.writeBuffer();var c=this,d=function(){b==a?c.caret(0,b):c.caret(b)};navigator.userAgent.match(/msie/i)?d():setTimeout(d,0)},blurEvent:function(){this.checkVal(),this.$element.val()!=this.focusText&&this.$element.trigger("change")},keydownEvent:function(a){var c=a.which;if(8==c||46==c||b&&127==c){var d=this.caret(),e=d.begin,f=d.end;return f-e===0&&(e=46!=c?this.seekPrev(e):f=this.seekNext(e-1),f=46==c?this.seekNext(f):f),this.clearBuffer(e,f),this.shiftL(e,f-1),!1}return 27==c?(this.$element.val(this.focusText),this.caret(0,this.checkVal()),!1):void 0},keypressEvent:function(a){var b=this.mask.length,c=a.which,d=this.caret();if(a.ctrlKey||a.altKey||a.metaKey||32>c)return!0;if(c){d.end-d.begin!==0&&(this.clearBuffer(d.begin,d.end),this.shiftL(d.begin,d.end-1));var e=this.seekNext(d.begin-1);if(b>e){var f=String.fromCharCode(c);if(this.tests[e].test(f)){this.shiftR(e),this.buffer[e]=f,this.writeBuffer();var g=this.seekNext(e);this.caret(g)}}return!1}},pasteEvent:function(){var a=this;setTimeout(function(){a.caret(a.checkVal(!0))},0)},clearBuffer:function(a,b){for(var c=this.mask.length,d=a;b>d&&c>d;d++)this.tests[d]&&(this.buffer[d]=this.options.placeholder)},writeBuffer:function(){return this.$element.val(this.buffer.join("")).val()},checkVal:function(a){for(var b=this.mask.length,c=this.$element.val(),d=-1,e=0,f=0;b>e;e++)if(this.tests[e]){for(this.buffer[e]=this.options.placeholder;f++<c.length;){var g=c.charAt(f-1);if(this.tests[e].test(g)){this.buffer[e]=g,d=e;break}}if(f>c.length)break}else this.buffer[e]==c.charAt(f)&&e!=this.partialPosition&&(f++,d=e);return!a&&d+1<this.partialPosition?(this.$element.val(""),this.clearBuffer(0,b)):(a||d+1>=this.partialPosition)&&(this.writeBuffer(),a||this.$element.val(this.$element.val().substring(0,d+1))),this.partialPosition?e:this.firstNonMaskPos}},a.fn.inputmask=function(b){return this.each(function(){var c=a(this),e=c.data("inputmask");e||c.data("inputmask",e=new d(this,b))})},a.fn.inputmask.defaults={mask:"",placeholder:"_",definitions:{9:"[0-9]",a:"[A-Za-z]","?":"[A-Za-z0-9]","*":"."}},a.fn.inputmask.Constructor=d,a(document).on("focus.inputmask.data-api","[data-mask]",function(b){var c=a(this);c.data("inputmask")||(b.preventDefault(),c.inputmask(c.data()))})}(window.jQuery);