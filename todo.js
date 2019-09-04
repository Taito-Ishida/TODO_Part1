jQuery(function() {
    /* 空白に関する処理 */
    $("span").each(function() {
        let spanNum = $(this).attr("id");   // spanタグ内のidを取得

        spanNum = spanNum*10;   // idの値をかけて空白を増やす (デフォルトの空白は10px)
        $(this).css({ "padding": spanNum+"px" });   // css側で空白を更新する
    });
    /* scroll-top function */
    const pagetop = $(".pagetop");
    pagetop.hide();

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {  // ページトップから200pxスクロールされたら
            pagetop.fadeIn();   // ページトップに戻るボタンを表示
        } else {
            pagetop.fadeOut();  // ページトップから200px以内だと非表示に
        }
    });
    /* text appear function */
    $(window).scroll(function () {
        $(".profile-text, .skill-text, .product-text").each(function () {
            let imgPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();

            // ページスクロールで特定オブジェクトがwindow表示内に入ったら
            if (scroll > imgPos - windowHeight + windowHeight/5) {
                $(this).addClass("fade_on");
            } else {
                $(this).removeClass("fade_on");
            }
        });
        $(".loader_off").each(function () {
            let imgPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();

            // ページスクロールで特定オブジェクトがwindow表示内に入ったら
            if (scroll > imgPos - windowHeight + windowHeight/5) {
                $(this).addClass("loader_on");  // ロードアクションをアクティブ化
                $(".loader_point").addClass("loader_point_active"); // ロードオブジェクトのscale()をアクティブ化
                $(".history-margin").addClass("history_appear"); // HISTORYテキストの表示アニメーションをアクティブ化
                $(".history-border").addClass("history_appear");
                $(".history-text").addClass("history-text_appear");
            }
        });
    });

});