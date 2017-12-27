//友情链接效果
$('.fri_tit li').mouseenter(function() {
    $('.fri_tit li').removeClass('cur');
    $(this).addClass('cur');
    if ($(this).index() === 0) {
        $('.fri_ct').css('display', 'none');
        $('.flagship_shore').css('display', 'block');
    } else if ($(this).index() === 1) {
        $('.fri_ct').css('display', 'none');
        $('.friendly').css('display', 'block');
    }
});
//左侧边栏效果
$('.f_home,.showConsult').hover(function() {
    $('.showConsult').css('display', 'block');
}, function() {
    $('.showConsult').css('display', 'none');
});
$('.f_top').click(function() {
    $(document).scrollTop(0);
});

$('.stitle .animate').hover(function() {
    $(this).parent().children('.category').css('display', 'block');
    $(this).css({ 'background': '#fff', color: '#314349' }).stop(true).animate({ marginLeft: '5px' }, 100);
}, function() {
    $(this).parent().children('.category').css('display', 'none');
    $(this).css({ 'background': '#314349', color: '#fff' }).stop(true).animate({ marginLeft: '0px' }, 100);
});
$('.category').hover(function() {
    $('.category').css('display', 'block');
}, function() {
    $('.category').css('display', 'none');
});

//划入立即扫码，出现二位码并缓慢滚动到指定位置
$('.mobBuy').hover(function() {
    $(".erdCode").css('display', 'block').stop(true).animate({ top: -160 }, 'slow');
}, function() {
    $(".erdCode").stop(true).animate({ top: -200 }, 'slow', function() {
        $(".erdCode").css('display', 'none')
    });
});

//规格选择效果
$('.taocan li').click(function() {
    $('.taocan li').removeClass('select-pro');
    $(this).addClass('select-pro');
});

//点击数量按钮改变购买数量
var good_num = $('.num_box .num').val();
$('.num_prev').click(function() {
    good_num--;
    if (good_num < 0) {
        good_num = 0;
    }
    $('.num_box .num')[0].value = good_num;
});
$('.num_next').click(function() {
    good_num++;
    // $('.num_box .num')[0].value = good_num;
    $('.num_box .num').val(good_num);
});

//划入小图列表，中图和大图改变为小图src值
$('.picbox img').mouseenter(function() {
    $('.middle_img').attr('src', $(this).attr('src'));
});

$('.middle_img,.shadow').hover(function() {
    $('.large_img_box').css('display', 'block');
    //划入中图，显示大图，把大图src改变为中图src，
    $('.large_img').attr('src', $(this).attr('src'));

}, function() {
    $('.large_img_box').css('display', 'none');
});


//鼠标在中图移动使大图放大该部分
var iMaxL = $('.img_m_box').width() - $('.shadow').width();
var iMaxT = $('.img_m_box').height() - $('.shadow').height()
$('.img_m_box').mousemove(function(ev) {
    var e = ev || window.event;
    var iT = e.pageY - $('.img_m_box').offset().top - $('.shadow').height() / 2;
    var iL = e.pageX - $('.img_m_box').offset().left - $('.shadow').width() / 2;

    iL = Math.max(iL, 0);
    iT = Math.max(iT, 0);
    iL = Math.min(iL, iMaxL);
    iT = Math.min(iT, iMaxT);
    // 大图移动的距离和遮罩层移动的距离的比例关系
    // iShadowCurL / iShadowMaxL = iImgCurL / iImgMaxL
    // var iBigImgL = iL * ($('.large_img').width() - $('.large_img_box').width()) / iMaxL;
    var iBigImgL = iL / iMaxL * ($('.large_img').width() - $('.large_img_box').width());
    // var iBigImgT = iT * ($('.large_img').height() - $('.large_img_box').height()) / iMaxT;
    var iBigImgT = iT / iMaxT * ($('.large_img').height() - $('.large_img_box').height());

    console.log(iBigImgT);
    // oShadow.style.left = iL + 'px';
    $('.shadow').css({ left: iL, top: iT });
    // oShadow.style.top = iT + 'px';

    $('.large_img').css({ left: -iBigImgL, top: -iBigImgT });
    // oLargeImg.style.left = -iBigImgL + 'px';
    // oLargeImg.style.top = -iBigImgT + 'px';
});
$('.img_m_box').mouseleave(function() {
    $('.shadow').css('left', -400);
});

$('.navList li').click(function() {
    $('.navList li').removeClass('on');
    $(this).addClass('on');

    $('.detail_tab1').css('display', 'none');
});