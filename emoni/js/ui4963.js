$(function(){$(".h5a-sidebar").affix({offset:{top:-10,bottom:function(){return this.bottom=$(".bs-footer").outerHeight(!0)}}}),$(".popover-test").popover({trigger:"hover",html:!0}),$(".tooltip-test").tooltip({html:!0}),$("filePicker").on("click",function(){filepicker.pick(function(a){console.log(a.url)})}),$(".sidenav-messages").find(".fa-times").on("click",function(){$(".sidenav-messages").remove()}),$(".sidenav-stuff").find(".fa-times").on("click",function(){$(".sidenav-stuff").remove()}),$("#loading-btn-h5a, #loading-btn-bs3").click(function(){var a=$(this);a.attr("disabled","disabled").html("Loading..."),setTimeout(function(){a.removeAttr("disabled").html("Loading State (done)")},3e3)}),$(".datepicker").datepicker({autoclose:!0}),$("#date-range").daterangepicker(),$("#date-range-predefined").daterangepicker({ranges:{Today:[moment(),moment()],"Last 7 Days":[moment().subtract("days",6),moment()]},startDate:moment().subtract("days",29),endDate:moment()},function(a,b){$("#date-range-predefined span").html(a.format("MMMM D, YYYY")+" - "+b.format("MMMM D, YYYY"))}),$("#timepicker").timepicker({defaultTime:"current",minuteStep:1,showSeconds:!0,showMeridian:!1}),$(".slider").slider(),jQuery("#tags-input").tagsManager(),$("#colorpicker").simplecolorpicker({picker:!0}),$("#colorpicker-inline").simplecolorpicker(),$("#editor").summernote({height:150}),$("#select-sizes").multiSelect()});