(function($){$.fn.extend({customStyle:function(options){if(!$.browser.msie||($.browser.msie&&$.browser.version>6)){return this.each(function(){var selectClass=new String($(this).attr('class'));selectClass=selectClass.replace("required","").replace("input-select","");var currentSelected=$(this).find(':selected');var bDisabled=$(this).attr('disabled');if(bDisabled){selectClass=selectClass+" disabled";}
if(!$(this).parent().find('.customStyleSelectBox').length){var currentText=currentSelected.text();var sOptionClass="";if($(this).find(':selected').val()!=''&&$(this).find(':selected').val()!='all'){sOptionClass="style-color-dark";}
$(this).after('<span class="customStyleSelectBox '+selectClass+'"><span class="'+sOptionClass+' customStyleSelectBoxInner">'+currentText+'</span></span>').css({position:'absolute',opacity:0,fontSize:$(this).next().css('font-size')});var iReducePx=17;if($.browser.webkit){if(!$.browser.chrome){iReducePx=0;}}
var selectBoxSpan=$(this).next();var selectBoxWidth=parseInt($(this).width())- parseInt(selectBoxSpan.css('padding-left'))- parseInt(selectBoxSpan.css('padding-right'))-iReducePx;var selectBoxSpanInner=selectBoxSpan.find(':first-child');selectBoxSpan.css({display:'inline-block'});selectBoxSpanInner.css({width:selectBoxWidth,display:'inline-block'});var selectBoxHeight=parseInt(selectBoxSpan.height())+ parseInt(selectBoxSpan.css('padding-top'))+ parseInt(selectBoxSpan.css('padding-bottom'));$(this).height(selectBoxHeight).change(function(){var sOptionClass="";if($(this).find(':selected').val()!=''&&$(this).find(':selected').val()!='all'){sOptionClass="style-color-dark";}
var currentSelectedClass=sOptionClass+" customStyleSelectBoxInner";selectBoxSpanInner.removeAttr('class');selectBoxSpanInner.attr('class',currentSelectedClass);selectBoxSpanInner.text($(this).find(':selected').text()).parent().addClass('changed');selectBoxSpanInner.css('border','none');});$(this).focus(function(){selectBoxSpanInner.css({'border-bottom':'0'});});$(this).blur(function(){selectBoxSpanInner.css('border','none');});$(this).keyup(function(event){var sOptionClass="";if($(this).find(':selected').val()!=''&&$(this).find(':selected').val()!='all'){sOptionClass="style-color-dark";}
var currentSelectedClass=sOptionClass+" customStyleSelectBoxInner";selectBoxSpanInner.attr('class',currentSelectedClass);selectBoxSpanInner.text($(this).find(':selected').text()).parent().addClass('changed');});}});}}});})(jQuery);