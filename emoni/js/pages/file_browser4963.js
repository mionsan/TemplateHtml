$(function(){$(".h5a-sidebar").affix({offset:{top:-10,bottom:function(){return this.bottom=$(".bs-footer").outerHeight(!0)}}}),$(".popover-test").popover({trigger:"hover",html:!0}),$(".tooltip-test").tooltip({html:!0}),$(".multiSelect").multiSelect();var a=$(".filesItem");a.on("mouseover",function(){$(this).find(".remote").css("display","block")}),a.on("mouseout",function(){$(this).find(".remote").css("display","none")}),$(".filesItem span, .filesItem img").on("click",function(){var a=$(this).parent();if(a.hasClass("image")){var b=a.find("img");$("#imageModal .modal-body").css("text-align","center"),$("#imageModal #myModalLabel").html("Image Preview"),$("#imageModal .modal-body").html("<img style='width:350px;' src='"+b.data("preview")+"' alt='preview'/><h4>"+b.attr("alt")+"</h4>"),$("#imageModal").modal("toggle")}else if(a.hasClass("video"))$("#imageModal .modal-body").css("text-align","center"),$("#imageModal #myModalLabel").html("VIDEO"),$("#imageModal .modal-body").html("<h4>"+a.data("name")+"</h4>"),$("#imageModal").modal("toggle");else if(a.hasClass("text"))$("#imageModal .modal-body").css("text-align","center"),$("#imageModal #myModalLabel").html("TEXT"),$("#imageModal .modal-body").html("<h4>"+a.data("name")+"</h4>"),$("#imageModal").modal("toggle");else if(a.hasClass("other"))$("#imageModal .modal-body").css("text-align","center"),$("#imageModal #myModalLabel").html("FILE"),$("#imageModal .modal-body").html("<h4>"+a.data("name")+"</h4>"),$("#imageModal").modal("toggle");else if(a.hasClass("folder"))window.location.href=a.data("goto");else{if(!a.parent().hasClass("add"))return!1;$("#folderModal").modal("toggle")}}),removeItem=function(a){var b=confirm("DELETE?");b===!0&&$("#"+a).remove()},setAccess=function(a,b){var c;$("#myModalSecurityLabel").html(a+" - Access"),$("#folderModalSecurity").modal("toggle");var d={allow:[{id:"1",name:"Administrators"}],deny:[{id:"4",name:"Clients/Architects"},{id:"5",name:"Clients/Developers"},{id:"6",name:"Clients/Vendors"},{id:"3",name:"Clients/Leads"},{id:"7",name:"Clients/VIP"},{id:"2",name:"Press"}]};console.log("res: ",d),c='<input name="dir" type="hidden" value="'+b+'">',c+='<select multiple="multiple" class="multiSelect" name="groups[]" id="'+b+'multiselect">',$.each(d.allow,function(a,b){c+='<option selected="selected" value="'+b.id+'">'+b.name+"</option>"}),$.each(d.deny,function(a,b){c+='<option value="'+b.id+'">'+b.name+"</option>"}),c+="</select>",$("#folderModalSecurity .modal-body .row .col-sm-12").html(c),$(".multiSelect").multiSelect()},modifyFolderName=function(a){var b;$("#folderModalEdit").modal("toggle");var c={name:"Folder Name",id:"3",locales:[{id:"1",flag:"http://www.geonames.org/flags/x/it.gif",name:"Italiano",label:"Nome Cartella"},{id:"2",flag:"http://www.geonames.org/flags/x/uk.gif",name:"English",label:"Folder Name"},{id:"3",flag:"http://www.geonames.org/flags/x/de.gif",name:"Deutsch",label:"Ordnernamen"},{id:"4",flag:"http://www.geonames.org/flags/x/fr.gif",name:"Français",label:"Nombre de Dossier"},{id:"5",flag:"http://www.geonames.org/flags/x/es.gif",name:"Español",label:"Nombre Carpeta"},{id:"6",flag:"http://www.geonames.org/flags/x/ru.gif",name:"Русский",label:"имя папки"}]},b="";b='<div class="col-md-12"><div class="input-group"><span class="h5a-input-group-addon input-group-addon"><i class="glyphicon glyphicon-folder-open"></i></span>',b+='<input class="form-control required" placeholder="'+c.name+'" value="'+c.name+'" disabled="disabled" name="'+c.name+'" type="text"></div><br/></div>',$.each(c.locales,function(a,c){b+='<div class="col-md-6"><div class="input-group">',b+='<span class="h5a-input-group-addon input-group-addon"><img width="20" height="13" src="'+c.flag+'" /></span>',b+='<input class="form-control" placeholder="'+c.name+'" value="'+c.label+'" name="name'+c.id+'" type="text">',b+="</div><br/></div>"}),b+='<input name="dir" type="hidden" value="'+a+'">',$("#editFolderContent").html(b)};var b="files",c=$("<button/>").addClass("btn btn-primary").prop("disabled",!0).text("Processing...").on("click",function(){var a=$(this),b=a.data();a.off("click").text("Abort").on("click",function(){a.remove(),b.abort()}),b.submit().always(function(){a.remove()})});$("#fileupload").fileupload({url:b,dataType:"json",autoUpload:!1,acceptFileTypes:/(\.|\/)(gif|jpe?g|png|pdf|zip|txt|tar\.gz|gzip|bzip|rtf|doc|docx|tiff|xls|rar|)$/i,maxFileSize:5e6,disableImageResize:/Android(?!.*Chrome)|Opera/.test(window.navigator.userAgent),previewMaxWidth:100,previewMaxHeight:100,previewCrop:!0}).on("fileuploadadd",function(a,b){b.context=$("<div/>").appendTo("#files"),$.each(b.files,function(a,d){var e=$("<p/>").append($("<span/>").text(d.name));a||e.append("<br>").append(c.clone(!0).data(b)),e.appendTo(b.context)})}).on("fileuploadprocessalways",function(a,b){var c=b.index,d=b.files[c],e=$(b.context.children()[c]);d.preview&&e.prepend("<br>").prepend(d.preview),d.error&&e.append("<br>").append(d.error),c+1===b.files.length&&b.context.find("button").text("Upload").prop("disabled",!!b.files.error)}).on("fileuploadprogressall",function(a,b){var c=parseInt(b.loaded/b.total*100,10);$("#progress .progress-bar").css("width",c+"%")}).on("fileuploaddone",function(a,b){$.each(b.files,function(a,c){var d=$("<a>").attr("target","_blank").prop("href",c.url);$(b.context.children()[a]).wrap(d)})}).on("fileuploadfail",function(a,b){$.each(b.files,function(a,c){var d=$("<span/>").text(c.error);$(b.context.children()[a]).append("<br>").append(d)})}).prop("disabled",!$.support.fileInput).parent().addClass($.support.fileInput?void 0:"disabled")});