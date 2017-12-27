$(
    function() {
        //侧边栏注册登录效果
        $('.sidebar_tit').click(function() {
            $('.right_sidebar').toggleClass('hide');
        });
        $('.times a').click(function() {
            $('.right_sidebar').removeClass('hide');
        });
        //导航hover效果
        $('.tier1 li').hover(function() {
            $(this).css('background', '#444');
            $(this).children('.tier2').css('display', 'block');
        }, function() {
            $(this).css('background', '#222');
            $(this).children('.tier2').css('display', 'none');
        });
        $('.tier2 li').hover(function() {
            $(this).css('background', '#444');
            $(this).children('.tier3').css('display', 'block');
        }, function() {
            $(this).css('background', '#111');
            $(this).children('.tier3').css('display', 'none');
        });

        $(window).resize(function(ev) {
            var wW = $(window).width();
            if (wW < 735) {
                $('.tier1 li').off('hover');
                $('.tier2 li').off('hover');
                $('.icon-arrow-bottom-thin').click(function() {
                    $(this).parent().siblings('.tier2').stop(true).toggle('normal');
                });
                $('.icon-gengduo').click(function() {
                    $(this).parent().siblings('.tier3').stop(true).toggle('normal');
                });

                //在手机屏中，点击导航弹出图标，弹出导航
                $('.pop_btn').click(function() {
                    console.log($('.tier1').css('right'));
                    if ($('.tier1').css('right') !== '0px') {
                        $('.tier1').stop(true).animate({ 'right': 0 }, 200);
                        // $('.tier1').parent().parent().animate({ 'margin-left': '-276px' }, 'normal');
                        // $('.tier1').parent().parent().siblings().animate({ 'margin-left': '-276px' }, 'normal');
                        $('body').stop(true).animate({ 'margin-left': '-276px' }, 200);
                        $('.navbar').stop(true).animate({ 'left': '-276px' }, 200);
                    } else {
                        $('.tier1').stop(true).animate({ 'right': '-440px' }, 200);
                        // $('.tier1').parent().parent().animate({ 'margin-left': 0 }, 'normal');
                        // $('.tier1').parent().parent().siblings().animate({ 'margin-left': 0 }, 'normal');
                        $('body').stop(true).animate({ 'margin-left': 0 }, 200);
                        $('.navbar').stop(true).animate({ 'left': '0px' }, 200);
                    }

                    // if ($('.navbar').css('position') == 'fixed') {
                    //     $('.navbar').css({ 'position': 'relative' });
                    // } else {
                    //     $('.navbar').css('position', 'fixed');
                    // }

                });

                //点击底部注册登录小图标，弹出注册登录链接框
                $('.callSiderbar').click(function() {
                    $('.right_sidebar').stop('true').animate({ 'top': '80%' }, 'normal', function(ev) {


                        $(document.body).not('.right_sidebar').click(function(ev) {
                            var e = ev || window.event;
                            if (e.stopPropagation) {
                                e.stopPropagation()
                            } else {
                                e.cancleBubble = true;
                            }
                            $('.right_sidebar').stop('true').animate({ 'top': '200%' }, 'normal');
                        });
                    });

                });
            } else {
                $('.tier1 li').hover(function() {
                    $(this).css('background', '#444');
                    $(this).children('.tier2').css('display', 'block');
                }, function() {
                    $(this).css('background', '#222');
                    $(this).children('.tier2').css('display', 'none');
                });
                $('.tier2 li').hover(function() {
                    $(this).css('background', '#444');
                    $(this).children('.tier3').css('display', 'block');
                }, function() {
                    $(this).css('background', '#111');
                    $(this).children('.tier3').css('display', 'none');
                });
            }

        });


    }
);