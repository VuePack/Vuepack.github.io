$(document).ready(function () {
  var $sidebar = $('#sidebar');
  var headerHeight = $('.header-inner').height();
  var footerOffset = parseInt($('.main').css('padding-bottom'), 10);
  var sidebarTop = headerHeight + 10;

  $sidebar
    .css({ 'margin-top': sidebarTop })
    .show();

  NexT.utils.isDesktop() && $('.page-post-detail .sidebar-inner').affix({
    offset: {
      top: sidebarTop,
      bottom: footerOffset
    }
  });

  // 滚动固定头像
  $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if(scrollTop > $('.header-inner').height()){
          $('#header').hide();
          $('#sidebar').addClass('scroll-sidebar');
      }else{
          $('#header').show();
          $('#sidebar').removeClass('scroll-sidebar');
      }
  });

  //跳转到首页
  $('#sidebar .circle').click(function(){
    window.location.href= 'http://likr.cn/'
  })

  var duoshuoQuery = {short_name:"vuepack"};
  var ds = document.createElement('script');
  ds.type = 'text/javascript';ds.async = true;
  ds.src = 'http://static.duoshuo.com/embed.js';
  ds.charset = 'UTF-8';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
});
