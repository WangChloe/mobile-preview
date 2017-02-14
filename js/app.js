// 初始化
$(function() {
    var dataType = $('body').attr('data-type');
    for (key in pageData) {
        if (key == dataType) {
            pageData[key]();
        }
    }
})

// 页面数据
var pageData = {
    'preview': function previewData() {
        $('body').css('padding', '0');
        // 打开页面列表
        $('.open-preview-list').eq(0).on('click', function() {
            $(this).find('i').toggleClass('active');
            $('.preview-nav-list').toggleClass('active');
        })

        autoSize();
        function autoSize() {
            if ($('body').width() < 700) {
                // 移动端
                $('.preview').css({
                    "max-width": "100%"
                });
                $('.preview-nav').hide();
                // $('.preview-pc-view').css('height', $(window).height())
            } else {
                // PC端
                $('.preview').css({
                    "max-width": "100%",
                    "padding-right": "70px"
                });
                // $('.preview-pc-view').css('height', $(window).height() - 33)
            }

        }
        $('.preview-nav-list-block span:nth-child(1)').addClass('active');
        $('.preview-nav-list-block').find('span').on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
            $('.preview-view-iframe').attr('src', $(this).attr('data-src'))
        });
        // $('.preview-list-pc').on('click', function() {
        //     $('.preview-phone-block').hide();
        //     $('.preview-pc-block').show();
        //     $(this).find('i').addClass('active');
        //     $('.preview-list-wap').find('i').removeClass('active')
        // })
        // $('.preview-list-wap').on('click', function() {
        //     $('.preview-phone-block').show();
        //     $('.preview-pc-block').hide();
        //     $(this).find('i').addClass('active');
        //     $('.preview-list-pc').find('i').removeClass('active')
        // })
    }
}