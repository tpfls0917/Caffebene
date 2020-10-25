// main.js
$(function() {
    // 2단계 메뉴 액션 + fade 효과
    $('#gnb > .depth1 > li').hover(
        function() {
            $(this)
                .find('.depth2')
                .stop().fadeIn(400);
        },
        function() {
            $(this)
                .find('.depth2')
                .stop().fadeOut(400);
        }
    );
    
    // slider
    var top = 0; // 슬라이더 위치
    var duration = 3000; // 인터벌 간격 3초
    setInterval(function(){
        // 마지막 이미지이면 처음으로
        if(top <= -600) {
            top = 0;
        } else {
            top = top - 300;
        }
        $('.slider > .sliders').css('marginTop', top);
    }, duration)
});

// 탭 버튼 액션
$(function() {
    $('.tab_group > a') // 첫번째 버튼
        .first()
        .click(function() {
            $('#gallery').removeClass('show');
            $('#notice').addClass('show');
            // 탭 버튼 선택 효과
            $(this).addClass('selected');
            $('.tab_group > a')
                .last().removeClass('selected');
        })
    $('.tab_group > a') // 두번째 버튼
        .last()
        .click(function() {
            $('#notice').removeClass('show');
            $('#gallery').addClass('show');
            // 탭 버튼 선택 효과
            $(this).addClass('selected');
            $('.tab_group > a')
                .first().removeClass('selected');
        })
});

// popup 창
$(function() {
    // 공지사항 클릭시 팝업창 열기
    $('#notice > ul > li:first')
        .click(function() {
            $('.popup').show();
    });
    
    // 팝업창 닫기 버튼 클릭시(추가)
    $('.popup > .btn-close')
        .click(function() {
            $('.popup').hide();
    });
});