'use strict';var Settings=new function(){this.navbar=$('.js-navbar');this.footer=$('footer.footer');this.init=function(){this.pages();};this.pages=function(){var currentPage=function currentPage(URI){return window.location.href.indexOf(URI)>-1;};if(currentPage('product.html')){$(this.navbar).addClass('navbar--back');$(window).resize(function(){if($(window).width()<992){$(this.navbar).find('.navbar-brand').hide();$(this.navbar).find('.navbar-btn-back').removeAttr('style');}else{$(this.navbar).find('.navbar-brand').show();$(this.navbar).find('.navbar-btn-back').hide();}});$(window).trigger('resize');this.hideFooter();}
if(currentPage('storefront.html')){$(this.navbar).find('.dropdown-cart').hide();}
if(currentPage('payment-details.html')){this.disableAdv();}};this.toggleCart=function(){$(this.navbar).find('.dropdown-cart').toggle();$('.js-add-to-cart').toggleClass('invisible');};this.toggleAlert=function(){if($(window).width()<768){$('html, body').animate({scrollTop:0},500);}
$('.alert-wrapper').toggle().delay(10000).fadeOut();};this.enableAdv=function(){var adv=$('.form-payment-action__item--select');adv.removeClass('invisible');adv.find('.custom-select').attr('required',true);};this.disableAdv=function(){var adv=$('.form-payment-action__item--select');adv.addClass('invisible');adv.find('.custom-select').removeAttr('required');};this.toggleFooter=function(){$(this.footer).toggle();};this.hideFooter=function(){$(this.footer).hide();};this.showFooter=function(){$(this.footer).show();};}();Settings.init();