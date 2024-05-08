$(document).ready(function () {
    $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } }); if ($(window).scrollTop() !== 0) { $(window).scrollTop(0); }
    $('.blog-auth-name').click(function (e) { e.preventDefault(); var base_url = 'https://blog.thecrowdfundingformula.com'; window.location.href = base_url + "?a=" + $(this).data('id'); })
    if (window.navigator.userAgent.indexOf("Edge") > -1) { $('video').css({ 'height': 'unset' }); }
}); function isEmail(email) { var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; return regex.test(email); }
function validateInput(cont) { var items = cont.find('input, textarea'), errCont = cont.find('.error'), errMsg = false; emp = 0; pas = 0; items.each(function () { var that = $(this), val = that.val(), valLength = val.length, className = 'red-border'; if (!that.hasClass('hidden') && that.attr('type') !== 'hidden' && that.attr('type') !== 'submit') { if (that.hasClass('email')) { if (isEmail(val)) { that.removeClass(className); } else { that.addClass(className); errMsg = true; emp++; } } else if (that.hasClass('required')) { if (valLength > 2) { that.removeClass(className); } else { that.addClass(className); errMsg = true; } } } }); if (errMsg) { return errMsg; } }
$(document).on('click', function (e) {
    if ($(e.target).hasClass('btn')) {
        var cont = $(e.target).closest('form'); var res = validateInput(cont); if ($(e.target).closest('form').attr('id') == 'login-form') { e.preventDefault(); if (!res) { var url = $(e.target).closest('form').attr('action'); var type = $(e.target).closest('form').attr('method'); var data = $(e.target).closest('form').serialize(); var url = new URL(window.location.href); var c = url.searchParams.get("path"); $.ajax({ url: url, type: type, data: data, success: function (result) { if (c !== null) { window.location.replace('/' + c); } else { window.location.replace('/home'); } }, statusCode: { 422: function (result) { var message = JSON.parse(result.responseText); $('.email').addClass('red-border'); $('.password').addClass('red-border'); message = message.message; $('.invalid-feedback strong').text(message) } } }) } }
        if (res) { e.preventDefault(); }
    }
    if (!$(e.target).closest('header').length) { $('.magnifying ').addClass('active'); $('.tcfClose ').removeClass('active'); $('.search form ').removeClass('active'); }
    if (!$(e.target).closest('.filter-cont').length) { $('.filter-cont').find('i').removeClass('active'); $('.filter-cont-list').stop().animate({ height: '0' }, 300); }
})
function autoHeightAnimate(element, time) { var curHeight = element.height(), autoHeight = element.css('height', 'auto').height(); element.height(curHeight); element.stop().animate({ height: autoHeight }, time); }
function animationElements(el, reverse) { if ($(window).scrollTop() + $(window).height() > el.offset().top) { el.addClass('active'); } else { if (reverse == true) { el.removeClass('active'); } } }
let slider = $('.swiper-container'), parentWrap = slider.parentNode, slides = $('.swiper-slide'); var options = { direction: 'horizontal', spaceBetween: 0, dynamicBullets: true, watchOverflow: true, parallax: true, speed: 1000, slidesPerView: 1, autoplay: false, mousewheel: false, allowTouchMove: true, loop: true, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }, }
var mySwiper = new Swiper(slider, options); $(document).ready(function () { $('#load-more').click(function () { var start = $(this).data('start'); $.ajax({ url: '/tools/load', type: "post", data: { 'id': start, }, success: function (data) { $('.tools-list').append(data.html); if (data.check) { $('#load-more').remove(); } else { $('#load-more').data('start', data.id); } }, error: function (error) { alert(error); } }); }); }); $(window).on('load', function () { $('header .search-form').removeClass('active'); $(".loading-menu").fadeOut('slow', function () { $(".square-menu").fadeIn('slow'); }) }); $('.menu-btn').click(function () {
    if ($('header .search-form').hasClass('active') || $('header .social').hasClass('active')) {
        if ($('header .search-form').hasClass('active')) { $('.icons').find('i').toggleClass('active'); }
        $('header .search-form').removeClass('active'); $('header .social').removeClass('active'); if ($(window).width() < 900 && window.oreintation !== 0) { $('header,html,body').toggleClass('active'); }
        setTimeout(function () {
            if ($(window).width() > 900 || $(window).width > 741 && window.oreintation !== 90) { $('header').toggleClass('active'); }
            headerQty = $(window).scrollTop();
        }, 600);
    } else { if ($(window).width() < 900 && window.oreintation !== 0) { if ($('header').hasClass('anim') && !$('header').hasClass('active')) { } else { headerQty = $(window).scrollTop(); $('header').toggleClass('active'); $('html,body').toggleClass('active'); $('body').css('position', 'relative'); } } else { headerQty = $(window).scrollTop(); $('header').toggleClass('active'); } }
    if ($(window).width() < 900 && window.oreintation !== 0) { if (!$('header').hasClass('anim')) { $('header').addClass('anim'); } else { setTimeout(function () { $('header').removeClass('anim'); }, 600) } }
})
if ($(window).width() < 1201 && $(window).width() > 900) { var bookCont = $('.book-cont'); var menuCont = $('.menu-cont'); var bookContW = bookCont.outerWidth(); var menuContW = $(window).width() - $('header').width() - bookContW; bookCont.css({ 'right': menuContW + $('header').width() - 1 }); menuCont.css({ 'width': menuContW }); }
$(document).ready(function () {
    if ($(window).width() < 900 && window.oreintation !== 0) { $('.icons').next().addClass('active'); }
    $('.forgot-form').on('submit', function (e) { e.preventDefault(); var url = $(this).attr('action'); var type = $(this).attr('method'); var data = $(this).serialize(); validateInput($(this)); $.ajax({ url: url, type: type, data: data, success: function (result) { $('.overlay-forgot').addClass('active'); setTimeout(function () { window.location.replace('/'); }, 4000); } }) })
}); $('.icons').click(function () { $("#search-form-5c248a4805064").focus(); if ($('header').hasClass('active') || $('header .social').hasClass('active')) { $('header').removeClass('active'); $('header .social').removeClass('active'); setTimeout(function () { $('.icons').find('i').toggleClass('active'); $('.icons').next().toggleClass('active'); }, 600); } else { $('.icons').find('i').toggleClass('active'); $('.icons').next().toggleClass('active'); } }); $(window).on('scroll', { passive: true }, function (e) { if ($('header').hasClass('active')) { $(window).scrollTop(headerQty); } })
var now = new Date().getTime(); var setupTime = localStorage.getItem('setupTime'); $('.cookies .close').click(function () { $('.cookies').remove(); })
$('.cookies .got').click(function () { localStorage.clear(); localStorage.setItem('setupTime', now); $('.cookies').remove(); })
$(document).ready(function () { if (!setupTime) { localStorage.clear(); $('.cookies').addClass('active'); } }); if ($('body').hasClass('page-template-archive-post')) {
    var url = window.location.href; if (url.indexOf('?events') !== -1) { $('.each-blog-content').addClass('event'); } else { $('.each-blog-content').addClass('all'); }
    var path = window.location.search; if (path == "") { $('.filter-cont').find('.each-cat').eq(0).addClass('active'); }
    $('.filter-cont').find('.each-cat').each(function () { let hrefVal = $(this).attr('href'); if (hrefVal == path) { $(this).addClass('active'); } });
}
if ($('.container').hasClass('homepage')) {
    if ($(window).width() > 1000) { $("video").on('play', function () { $('header,.subtraction').removeClass('opacity'); }); $('.menu-icon .menu-btn').css('opacity', '0'); $(window).on('scroll', { passive: true }, function () { if ($(window).scrollTop() > $(window).height()) { $('.homepage .menu-btn').css('opacity', '0'); $('.menu-icon .menu-btn').css('opacity', '1'); } else { $('.homepage .menu-btn').css('opacity', '1'); $('.menu-icon .menu-btn').css('opacity', '0'); } }); }
    $(window).on('load', function () { $('.section-1').addClass('active'); $('.section-9 .book-cont-desc ul li').addClass('font-medium h6'); }); if ($(window).width() < 741) { }
    $('.mute-unmute').click(function () { $(this).find('.soundbar').toggleClass('unmute'); if ($("video").prop('muted')) { $("video").prop('muted', false); $('.music').text('Sound Off'); } else { $("video").prop('muted', true); $('.music').text('Sound On'); } }); $(document).ready(function () {
        setTimeout(function () {
            var maxHgtTitle = 0; var maxHgtSubTitle = 0; var maxHgtText = 0; $('.section-4-block-single-project').each(function () {
                let hgtTitle = $(this).find('.section-4-block-single-project-cont-content-title').height(); let hgtSubTitle = $(this).find('.section-4-block-single-project-cont-content-subtitle').height(); let hgtText = $(this).find('.section-4-block-single-project-cont-content-text').height(); if (hgtTitle > maxHgtTitle) { maxHgtTitle = hgtTitle; }
                if (hgtSubTitle > maxHgtSubTitle) { maxHgtSubTitle = hgtSubTitle; }
                if (hgtText > maxHgtText) { maxHgtText = hgtText; }
            }); if ($(".slick-slide").hasClass("slick-active")) { $('.section-4-block-single-project-cont-content-title').height(maxHgtTitle); $('.section-4-block-single-project-cont-content-subtitle').height(maxHgtSubTitle); $('.section-4-block-single-project-cont-content-text').height(maxHgtText); }
        }, 2000)
        $('.projects').slick({ slidesToShow: 4, slidesToScroll: 1, autoplay: true, autoplay: true, autoplaySpeed: 2000, prevArrow: '<h5 class="slick-prev tcfArrow-Left slider-btn"></h5>', nextArrow: '<h5 class="slick-next tcfArrow-Right slider-btn"></h5>', responsive: [{ breakpoint: 900, settings: { slidesToShow: 2 } }, { breakpoint: 480, settings: { slidesToShow: 1 } }] })
        $('.testimg').slick({ slidesToShow: 1, slidesToScroll: 1, arrows: false, easing: 'ease', asNavFor: '.testinfo', infinite: true, autoplay: true, autoplaySpeed: 10000, }); $('.testinfo').slick({ slidesToShow: 1, slidesToScroll: 1, easing: 'ease-in-out', infinite: true, asNavFor: '.testimg', prevArrow: '<h5 class="swiper-button-prev slick-prev tcfArrow-Left slider-btn"></h5>', nextArrow: '<h5 class="swiper-button-next slick-next tcfArrow-Right slider-btn"></h5>' });
    })
    $(window).on('scroll', { passive: true }, function () {
        animationElements($('.section-2-block')); animationElements($('.section-2-block').find('.block-cont-content')); animationElements($('.block-cont-img')); animationElements($('.section-3').find('.block')); animationElements($('.section-4-block-single-project')); animationElements($('.section-5')); animationElements($('.section-6-block').find('.block-cont-content')); animationElements($('.section-6-block').find('.block-cont-img')); animationElements($('.section-7').find('.block'), true); animationElements($('.section-13').find('.block'), true); animationElements($('.slider-cont')); animationElements($('.each-blog-content')); if ($('.amas').length) { animationElements($('.amas')); }
        if ($('.section-12')) { animationElements($('.testimg .slick-list')); animationElements($('.testinfo')); }
    });
}
if ($('.container').hasClass('team-page')) {
    $('.heads-info-slider').slick({ slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: false, rtl: true, asNavFor: '.heads-photo-slider' }).on('beforeChange', function (event, slick, currentSlide, nextSlide) { if (currentSlide !== nextSlide) { document.querySelectorAll('.slick-current + .slick-cloned').forEach(function (next) { setTimeout(function () { next.classList.add('slick-current'); }); }); } }); $('.heads-photo-slider').slick({ slidesToShow: 2, slidesToScroll: 1, asNavFor: '.heads-info-slider', dots: false, arrows: true, focusOnSelect: true, rtl: true, prevArrow: '<h5 class="slick-prev tcfArrow-Left"></h5>', nextArrow: '<h5 class="slick-next tcfArrow-Right"></h5>', responsive: [{ breakpoint: 1200, settings: { slidesToShow: 1, slidesToScroll: 1 } }] }); $(function () {
        var filterList = $('.filter-cont-list'), animateTime = 500, navLink = $('.selected,ul li.category'); navLink.click(function () {
            navLink.find('i').toggleClass('active'); if ($(this).hasClass('category')) { let val = $(this).text(); $('.selected-text').text(val); $('ul li.category').removeClass('active'); $(this).addClass('active'); }
            if (filterList.height() === 0) { autoHeightAnimate(filterList, animateTime); } else { filterList.stop().animate({ height: '0' }, animateTime); }
        });
    })
    $('.member-info ul').find('li').addClass('p'); $(window).on('scroll', { passive: true }, function () { animationElements($('.section-3').find('.block')); animationElements($('.section-5').find('.block'), true); animationElements($('.section-6').find('.slider-cont')); }); $('ul li.category').click(function () { let selectedCat = $(this).val(); $('.each-member').removeClass('disable'); if (selectedCat == 0) { $('.each-member').removeClass('disable'); } else { $('.each-member').each(function () { let memberCat = Number($(this).attr('data-id')); if (memberCat !== selectedCat) { $(this).addClass('disable'); } else { $(this).removeClass('disable'); } }); } }); $(document).ready(function () { $('a .tcfEmail').each(function () { var x = $(this).parent().attr('href'); var href = 'mailto:' + x; $(this).closest('a').attr('href', href); }) })
}
if ($('.container').hasClass('portfolio-page')) {
    $(function () {
        var navLink = $('.project-head'); animateTime = 500; navLink.click(function (e) {
            if (!$(e.target).hasClass('whiteBtn')) {
                if (!$(e.target).hasClass('indi')) {
                    let nav = $(this).closest('.each-pro').find('.project-body'); if (nav.height() === 0) { var title = $(this).find('.first-block .title').text(); title = title.replace(/\s/g, ''); window.location.hash = title; $(this).find('.plus').addClass('close'); autoHeightAnimate(nav, animateTime); } else {
                        var uri = window.location.toString(); if (uri.indexOf("#") > 0) { var clean_uri = uri.substring(0, uri.indexOf("#")); window.history.replaceState({}, document.title, clean_uri); }
                        $(this).find('.plus').removeClass('close'); nav.stop().animate({ height: '0' }, animateTime);
                    }
                }
            }
        });
    })
    $('.section-1-banner-img').addClass('active'); var winHeight = $(window).height(); $(window).on('scroll', { passive: true }, function (e) { animationElements($('.slider-cont')); animationElements($('.section-3').find('.block'), true); var scrollTop = $(window).scrollTop(); $('.each-pro').each(function () { if (scrollTop + winHeight > $(this).offset().top) { $(this).addClass('active'); } }) })
    $(document).ready(function () {
        setTimeout(function () {
            var hash = window.location.hash; hash = hash.replace('#', ''); $('.each-pro').each(function () {
                if (hash == $(this).attr('id')) {
                    $(this).find('.project-body').css('height', 'auto')
                    var y = $(this).offset().top; window.scrollTo(0, y);
                }
            })
        }, 500)
    })
}
if ($('.container').hasClass('tools-page')) {
    $('.section-1-banner-img').addClass('active'); $(function () {
        var filterList = $('.tool-status-list.full'), animateTime = 500, navLink = $('.tool-status.full .selected, .tool-status.full ul li.category'); navLink.click(function () {
            $('.filter-cont').find('i').removeClass('active'); if ($(this).hasClass('category')) { let val = $(this).text(); $('.tool-status.full .selected-text').text(val); $('.tool-status.full ul li.category').removeClass('active'); }
            $('.filter-cont-list').stop().animate({ height: '0' }, animateTime); if (filterList.height() === 0) { navLink.find('i').addClass('active'); autoHeightAnimate(filterList, animateTime); } else { filterList.stop().animate({ height: '0' }, animateTime); }
            var department = $('.department-filter.full p.active').data('value'); var status = $('.top-filters .tool-status.full .selected-text').text().toLowerCase(); var sort = $('.top-filters .tool-sort.full .selected-text').text().toLowerCase(); var tags = new Array(); $('.filter_tags span.active').each(function () { tags.push($(this).data('value')) }); var data = { 'department': department, 'status': status, 'sort': sort, 'tags': tags }; filterTool(data);
        });
    })
    $(function () {
        var filterList = $('.tool-sort-list.full'), animateTime = 500, navLink = $('.tool-sort.full .selected, .tool-sort.full ul li.category'); navLink.click(function () {
            $('.filter-cont').find('i').removeClass('active'); if ($(this).hasClass('category')) { let val = $(this).text(); $('.tool-sort.full .selected-text').text(val); $('.tool-sort.full ul li.category').removeClass('active'); }
            $('.filter-cont-list').stop().animate({ height: '0' }, animateTime); if (filterList.height() === 0) { navLink.find('i').addClass('active'); autoHeightAnimate(filterList, animateTime); } else { filterList.stop().animate({ height: '0' }, animateTime); }
            var department = $('.department-filter.full p.active').data('value'); var status = $('.top-filters .tool-status.full .selected-text').text().toLowerCase(); var sort = $('.top-filters .tool-sort.full .selected-text').text().toLowerCase(); var tags = new Array(); $('.filter_tags span.active').each(function () { tags.push($(this).data('value')) }); var data = { 'department': department, 'status': status, 'sort': sort, 'tags': tags }; filterTool(data);
        });
    })
    $(function () {
        var filterList = $('.tool-status-list.medium'), animateTime = 500, navLink = $('.tool-status.medium .selected, .tool-status.medium ul li.category'); navLink.click(function () {
            $('.filter-cont').find('i').removeClass('active'); if ($(this).hasClass('category')) { let val = $(this).text(); $('.tool-status.medium .selected-text').text(val); $('.tool-status.medium ul li.category').removeClass('active'); }
            $('.filter-cont-list').stop().animate({ height: '0' }, animateTime); if (filterList.height() === 0) { navLink.find('i').addClass('active'); autoHeightAnimate(filterList, animateTime); } else { filterList.stop().animate({ height: '0' }, animateTime); }
            var department = $('.department-filter.medium p.active').data('value'); var status = $('.top-filters .tool-status.medium .selected-text').text().toLowerCase(); var sort = $('.top-filters .tool-sort.medium .selected-text').text().toLowerCase(); var tags = new Array(); $('.filter_tags.small span.active').each(function () { tags.push($(this).data('value')) }); var data = { 'department': department, 'status': status, 'sort': sort, 'tags': tags }; filterTool(data);
        });
    })
    $(function () {
        var filterList = $('.tool-sort-list.medium'), animateTime = 500, navLink = $('.tool-sort.medium .selected, .tool-sort.medium ul li.category'); navLink.click(function () {
            $('.filter-cont').find('i').removeClass('active'); if ($(this).hasClass('category')) { let val = $(this).text(); $('.tool-sort.medium .selected-text').text(val); $('.tool-sort.medium ul li.category').removeClass('active'); }
            $('.filter-cont-list').stop().animate({ height: '0' }, animateTime); if (filterList.height() === 0) { navLink.find('i').addClass('active'); autoHeightAnimate(filterList, animateTime); } else { filterList.stop().animate({ height: '0' }, animateTime); }
            var department = $('.department-filter.medium p.active').data('value'); var status = $('.top-filters .tool-status.medium .selected-text').text().toLowerCase(); var sort = $('.top-filters .tool-sort.medium .selected-text').text().toLowerCase(); var tags = new Array(); $('.filter_tags.small span.active').each(function () { tags.push($(this).data('value')) }); var data = { 'department': department, 'status': status, 'sort': sort, 'tags': tags }; filterTool(data);
        });
    })
    $(function () {
        var filterList = $('.tool-status-list.small'), animateTime = 500, navLink = $('.tool-status.small .selected, .tool-status.small ul li.category'); navLink.click(function () {
            $('.filter-cont').find('i').removeClass('active'); if ($(this).hasClass('category')) { let val = $(this).text(); $('.tool-status.small .selected-text').text(val); $('.tool-status.small ul li.category').removeClass('active'); }
            $('.filter-cont-list').stop().animate({ height: '0' }, animateTime); if (filterList.height() === 0) { navLink.find('i').addClass('active'); autoHeightAnimate(filterList, animateTime); } else { filterList.stop().animate({ height: '0' }, animateTime); }
            var department = $('.department-filter-list li.active').data('value'); var status = $('.top-filters .tool-status.small .selected-text').text().toLowerCase(); var sort = $('.top-filters .tool-sort.small .selected-text').text().toLowerCase(); var tags = new Array(); $('.filter_tags.small span.active').each(function () { tags.push($(this).data('value')) }); var data = { 'department': department, 'status': status, 'sort': sort, 'tags': tags }; filterTool(data);
        });
    })
    $(function () {
        var filterList = $('.tool-sort-list.small'), animateTime = 500, navLink = $('.tool-sort.small .selected, .tool-sort.small ul li.category'); navLink.click(function () {
            navLink.find('i').toggleClass('active'); $('.filter-cont').find('i').removeClass('active'); if ($(this).hasClass('category')) { let val = $(this).text(); $('.tool-sort.small .selected-text').text(val); $('.tool-sort.small ul li.category').removeClass('active'); }
            $('.filter-cont-list').stop().animate({ height: '0' }, animateTime); if (filterList.height() === 0) { navLink.find('i').addClass('active'); autoHeightAnimate(filterList, animateTime); } else { filterList.stop().animate({ height: '0' }, animateTime); }
            var department = $('.department-filter-list li.active').data('value'); var status = $('.top-filters .tool-status.small .selected-text').text().toLowerCase(); var sort = $('.top-filters .tool-sort.small .selected-text').text().toLowerCase(); var tags = new Array(); $('.filter_tags.small span.active').each(function () { tags.push($(this).data('value')) }); var data = { 'department': department, 'status': status, 'sort': sort, 'tags': tags }; filterTool(data);
        });
    })
    $('.department-filter.full p').click(function () { $('.department-filter.full p.active').removeClass('active'); var department = $(this).data('value'); var status = $('.top-filters .tool-status.full .selected-text').text().toLowerCase(); var sort = $('.top-filters .tool-sort.full .selected-text').text().toLowerCase(); var tags = new Array(); $('.filter_tags span.active').each(function () { tags.push($(this).data('value')) }); var data = { 'department': department, 'status': status, 'sort': sort, 'tags': tags, }; $(this).addClass('active'); filterTool(data); })
    $('.department-filter.medium p').click(function () { $('.department-filter.medium p.active').removeClass('active'); var department = $(this).data('value'); var status = $('.top-filters .tool-status.medium .selected-text').text().toLowerCase(); var sort = $('.top-filters .tool-sort.medium .selected-text').text().toLowerCase(); var tags = new Array(); $('.filter_tags.small span.active').each(function () { tags.push($(this).data('value')) }); var data = { 'department': department, 'status': status, 'sort': sort, 'tags': tags }; $(this).addClass('active'); filterTool(data); })
    $(function () {
        var filterList = $('.department-filter-list'), animateTime = 500, navLink = $('.departments .selected, .departments ul li.category'); navLink.click(function () {
            navLink.find('i').toggleClass('active'); if ($(this).hasClass('category')) { let val = $(this).text(); $('.departments .selected-text').text(val); $('.departments ul li.category.active').removeClass('active'); $(this).addClass('active'); }
            if (filterList.height() === 0) { autoHeightAnimate(filterList, animateTime); } else { filterList.stop().animate({ height: '0' }, animateTime); }
            var department = $('.department-filter-list li.active').data('value'); var status = $('.tool-status.small .selected-text').text().toLowerCase(); var sort = $('.tool-sort.small .selected-text').text().toLowerCase(); var tags = new Array(); $('.filter_tags.small span.active').each(function () { tags.push($(this).data('value')) }); var data = { 'department': department, 'status': status, 'sort': sort, 'tags': tags }; filterTool(data);
        });
    })
    $('.tool-search').submit(function (e) { e.preventDefault(); var url = $(this).attr('action'); var type = $(this).attr('method'); var data = $(this).serialize(); $.ajax({ url: url, type: type, data: data, success: function (result) { $('.tools-list-container').html(result); } }) })
    function filterTool(data) {
        $.ajax({
            url: '/tools/filters', type: 'POST', data: data, success: function (result) {
                $('.tools-list-container').html(result); $('.member-info-tag span').click(function (e) {
                    e.preventDefault(); e.stopPropagation(); var text = $(this).text().trim(); if (window.matchMedia("(min-width: 1200px)").matches) { var tags = $('.full_tags span'); } else { var tags = $('.small_tags span'); }
                    tags.each(function () { if ($(this).text().trim() == text) { $(this).trigger('click'); } })
                })
                $('.hidden-tags span').click(function (e) {
                    e.preventDefault(); e.stopPropagation(); var text = $(this).text().trim(); if (window.matchMedia("(min-width: 1200px)").matches) { var tags = $('.full_tags span'); } else { var tags = $('.small_tags span'); }
                    tags.each(function () { if ($(this).text().trim() == text) { $(this).trigger('click'); } })
                })
                if ($(window).width() > 1200) { $('.each-member').on('mousemove click', function (e) { if ($(e.target).hasClass('member-info') || $(e.target).closest('.member-info').length && (!$(e.target).hasClass('title') && !$(e.target).hasClass('text'))) { e.preventDefault(); $(e.target).parents('.each-member').addClass('aaaaa'); } else { $(e.target).parents('.each-member').removeClass('aaaaa'); } }) }
            }
        })
    }
    $('.row-col div').click(function (e) { $('.row-col div').removeClass('active'); $(this).addClass('active'); if ($(e.target).hasClass('col') || $(e.target).closest('.col').length) { $('.tools-list-container').addClass('col'); $('.tools-list-container').removeClass('row'); } else if ($(e.target).hasClass('row') || $(e.target).closest('.row').length) { $('.tools-list-container').addClass('row'); $('.tools-list-container').removeClass('col'); } })
    $('.dots').click(function (e) { $('.sec-filter').addClass('active'); $('html,body').addClass('hidden'); })
    $('.back').click(function (e) { $('.sec-filter').removeClass('active'); $('html,body').removeClass('hidden'); })
    if ($(window).width() < 1201) {
        $('.count').click(function (e) {
            e.preventDefault(); var check = true; if ($(this).siblings('.hided-tags').hasClass('active')) { check = false }
            $('.hided-tags').removeClass('active'); if (check) { $(this).siblings('.hided-tags').addClass('active'); }
        })
    }
    if ($(window).width() > 1200) { $('.each-member').on('mousemove click', function (e) { if ($(e.target).hasClass('member-info') || $(e.target).closest('.member-info').length && (!$(e.target).hasClass('title') && !$(e.target).hasClass('text'))) { e.preventDefault(); $(e.target).parents('.each-member').addClass('aaaaa'); } else { $(e.target).parents('.each-member').removeClass('aaaaa'); } }) }
}
if ($('.container').hasClass('service-page')) {
    $('.section-1-banner-img').addClass('active'); var winHeight = $(window).height(); $(window).on('scroll', { passive: true }, function (e) {
        animationElements($('.section-4').find('.block'), true); var scrollTop = $(window).scrollTop(); $('.heading').each(function () { if (scrollTop + winHeight > $(this).offset().top) { $(this).addClass('active'); } })
        $('.service-wrapper').each(function () { if (scrollTop + winHeight > $(this).offset().top) { $(this).addClass('active'); } })
    })
    $(document).ready(function (e) {
        var scrollTop = $(window).scrollTop(); $('.heading').each(function () { if (scrollTop + winHeight > $(this).offset().top) { $(this).addClass('active'); } })
        $('.service-wrapper').each(function () { if (scrollTop + winHeight > $(this).offset().top) { $(this).addClass('active'); } })
    })
}
if ($('.container').hasClass('vacancy-page')) {
    $(document).ready(function () { $('.block-wrapper').addClass('active'); })
    var winHeight = $(window).height(); $(window).on('scroll', { passive: true }, function (e) { var scrollTop = $(window).scrollTop(); $('.section').each(function () { if (scrollTop + winHeight > $(this).offset().top) { $(this).addClass('active'); } else { if ($(this).hasClass('internship-part')) { $(this).removeClass('active'); } } }) })
    $(window).on('scroll', { passive: true }, function (e) {
        var scrollTop = $(window).scrollTop(); $('.our-part-wrapper div').each(function () { if (scrollTop + winHeight > $(this).offset().top) { $(this).addClass('active'); } })
        animationElements($('.slider-cont')); animationElements($('.section-7').find('.block'), true);
    })
    $(function () { var navLink = $('.vacancy-title'), animateTime = 500; navLink.click(function () { let nav = $(this).closest('.each-vacancy').find('.description'); $('.each-vacancy').find('.description').stop().animate({ height: '0' }, animateTime); if (nav.height() === 0) { $(this).find('.plus').addClass('close'); autoHeightAnimate(nav, animateTime); } else { $(this).find('.plus').removeClass('close'); nav.stop().animate({ height: '0' }, animateTime); } }); })
    $(document).ready(function () { var id = window.location.hash; id = id.substr(1); $(".each-vacancy").each(function () { if ($(this).attr('id') == id) { $(this).find('.description').css('height', 'auto'); }; }); })
}
$(document).ready(function () { $('.form-last-item-no').css('display', 'none'); }); $(".radio-button input").click(function () { $('.last_section').html(''); if ($(this).val() == 'Yes') { $('.last_section').append('<div class="form-item form-last-item-yes"><label for="project_link" class="p font-regular">Link to Your Project*</label><input type="text" class="h7 font-regular required name="project_link" value="" placeholder="Type your answer"></div>') } else { $('.last_section').append('<div class="form-item form-last-item-no"><div class="form-item"><label for="project_description" class="p font-regular">Project Description*</label><textarea class="textarea h7 font-regular required form-group" placeholder="Type your answer" name="project_description"></textarea></div><div class="form-item"><label for="ready_materials" class="p font-regular">Provide URL To Your Ready-to-use Materials*</label><input type="text" class="h7 font-regular required " name="ready_materials" value="" placeholder="Type your answer"></div></div>'); } }); if ($('.container').hasClass('internship-page')) {
    $(document).ready(function () { $('.block-wrapper').addClass('active'); })
    var winHeight = $(window).height(); $(window).on('scroll', { passive: true }, function (e) { animationElements($('.section-7').find('.block'), true); animationElements($('.section-2-block')); animationElements($('.section-2-block').find('.block-cont-content')); animationElements($('.block-cont-img')); })
}
if ($('.container').hasClass('dashboard')) {
    $('.filter_tags1 span').click(function () {
        $('.filter_tags1 span').removeClass('active'); $('.events.active').removeClass('active')
        $(this).addClass('active'); var index = $(this).index(); $('.events').eq(index).addClass('active');
    })
}
if ($('.container').hasClass('profile_page')) {
    $('.cancel').click(function () { location.reload(); }); function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader(); reader.onload = function (e) { $('.uploadImage').attr('src', e.target.result); }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#profile_image").change(function () { readURL(this); });
}
else {
    $('.filter_tags span').click(function () {
        $(this).toggleClass('active'); var tags = new Array(); $('.filter_tags span.active').each(function () { tags.push($(this).data('value')) }); if ($('.filter_tags span.active').length > 0) { $('.clear').removeClass('disabled') } else { $('.clear').addClass('disabled') }
        if ($(window).width() < 768) { var department = $('.department-filter.small p.active').data('value'); var status = $('.top-filters .tool-status.small .selected-text').text().toLowerCase(); var sort = $('.top-filters .tool-sort.small .selected-text').text().toLowerCase(); } else if ($(window).width() >= 768 && $(window).width() < 1200) { var department = $('.department-filter.medium p.active').data('value'); var status = $('.top-filters .tool-status.medium .selected-text').text().toLowerCase(); var sort = $('.top-filters .tool-sort.medium .selected-text').text().toLowerCase(); } else { var department = $('.department-filter.full p.active').data('value'); var status = $('.top-filters .tool-status.full .selected-text').text().toLowerCase(); var sort = $('.top-filters .tool-sort.full .selected-text').text().toLowerCase(); }
        var data = { 'department': department, 'status': status, 'sort': sort, 'tags': tags }; filterTool(data);
    })
    $('.clear').click(function () {
        $(this).addClass('disabled'); $('.filter_tags span').removeClass('active'); $('.filter_tag_ask span').removeClass('active'); var tags = new Array(); if ($(this).hasClass('ama_tags')) { $('.filter_tag_ask span.active').each(function () { tags.push($(this).data('value')); }); var data = { 'tags': tags }; $.ajax({ url: '/crowdfunding-millionaires/filters', type: 'POST', data: data, success: function (result) { $('.amasList').html(result); } }) } else {
            $('.filter_tags span.active').each(function () { tags.push($(this).data('value')) }); if ($(window).width() < 768) { var department = $('.department-filter.small p.active').data('value'); var status = $('.top-filters .tool-status.small .selected-text').text().toLowerCase(); var sort = $('.top-filters .tool-sort.small .selected-text').text().toLowerCase(); } else if ($(window).width() >= 768 && $(window).width() < 1200) { var department = $('.department-filter.medium p.active').data('value'); var status = $('.top-filters .tool-status.medium .selected-text').text().toLowerCase(); var sort = $('.top-filters .tool-sort.medium .selected-text').text().toLowerCase(); } else { var department = $('.department-filter.full p.active').data('value'); var status = $('.top-filters .tool-status.full .selected-text').text().toLowerCase(); var sort = $('.top-filters .tool-sort.full .selected-text').text().toLowerCase(); }
            var data = { 'department': department, 'status': status, 'sort': sort, 'tags': tags }; filterTool(data);
        }
    })
}
$(document).ready(function () { if ($('.container').hasClass('ask-me-main')) { if ($('.container').find('.section-2').length == 0) { $('.section-1').addClass('no-arrow'); } } })
$(document).on('click', function (e) { if ($(e.target).hasClass('upcomin-main') || $(e.target).closest('.upcomin-main').length) { var x = $(e.target).closest('.upcomin-main').find('a').attr('href'); window.location.replace(x); } else if ($(e.target).hasClass('top-main') || $(e.target).closest('.top-main').length) { var x = $(e.target).closest('.top-main').find('a').attr('href'); window.location.replace(x); } })
$('.member-info-tag span').click(function (e) {
    e.preventDefault(); e.stopPropagation(); var text = $(this).text().trim(); if (window.matchMedia("(min-width: 1200px)").matches) { var tags = $('.full_tags span'); } else { var tags = $('.small_tags span'); }
    tags.each(function () { if ($(this).text().trim() == text) { $(this).trigger('click'); } })
})
$('.hidden-tags span').click(function (e) {
    e.preventDefault(); e.stopPropagation(); var text = $(this).text().trim(); if (window.matchMedia("(min-width: 1200px)").matches) { var tags = $('.full_tags span'); } else { var tags = $('.small_tags span'); }
    tags.each(function () { if ($(this).text().trim() == text) { $(this).trigger('click'); } })
})
$(document).click(function (e) {
    if ($(e.target).hasClass('reply-button')) { $('.reply').closest('div').find('form').removeClass('show'); $(e.target).closest('div').find('form').addClass('show'); $(e.target).closest('div').siblings('form').find('textarea').focus(); $('.reply').css('display', 'block'); $(e.target).closest('.reply').css('display', 'none'); }
    if ($(e.target).hasClass('cancel')) { $(e.target).closest('form').removeClass('show'); $(e.target).closest('.body').find('.reply').css('display', 'block'); }
})
$('.comment-see-more').click(function () { $(this).closest('.single-comment').find('.hide').removeClass('hide'); $(this).remove(); })
$('.filter_tag_ask span').click(function () {
    $(this).toggleClass('active'); $('.clear').addClass('active'); var tags = Array(); $('.filter_tag_ask span.active').each(function () { tags.push($(this).data('value')); }); var data = { 'tags': tags }; $.ajax({ url: '/crowdfunding-millionaires/filters', type: 'POST', data: data, success: function (result) { $('.amasList').html(result); } })
    if ($('.filter_tag_ask span.active').length > 0) { $('.clear').removeClass('disabled') } else { $('.clear').addClass('disabled'); $('.clear').removeClass('active'); }
})
$('.tool-tags span').click(function () { var text = $(this).text().toLowerCase(); var new_url = '/tools-we-use?' + text; window.location.replace(new_url); })
$('.ama-tags span').click(function () { var text = $(this).text().toLowerCase(); var new_url = '/crowdfunding-millionaires?' + text; window.location.replace(new_url); })
$(document).ready(function () {
    if ($('.tools-page').length > 0) {
        var c = window.location.hash
        if (c !== '') {
            if (window.matchMedia("(min-width: 1200px)").matches) { var tags = $('.full_tags span'); } else { var tags = $('.small_tags span'); }
            tags.each(function () { if ($(this).text().trim().toLowerCase() == c) { $(this).trigger('click'); } })
        }
    }
    if ($('.ask-me-main').length > 0) {
        var c = window.location.hash
        if (c !== '') {
            var tags = $('.filter_tag_ask span'); tags.each(function () { if ($(this).text().trim().toLowerCase() == c) { $(this).trigger('click'); } })
            var ddd = $('.filter_tag_ask').offset().top - 200; $([document.documentElement, document.body]).animate({ scrollTop: ddd }, 500);
        }
    }
})
$('.comment-form').submit(function (e) { e.preventDefault(); var url = $(this).attr('action'); var type = $(this).attr('method'); var data = $(this).serialize(); var dd = $(this); var res = validateInput(dd); if (!res) { $.ajax({ url: url, type: type, data: data, success: function (result) { $('.comments').append(result); var ddd = $('.single-comment').last().offset().top; $("input[type=text], textarea").val(""); $([document.documentElement, document.body]).animate({ scrollTop: ddd }, 500); } }) } else { dd.addClass('show'); dd.closest('div').find('.reply').css('display', 'none'); } })
$('.comment-reply').submit(function (e) { e.preventDefault(); var url = $(this).attr('action'); var type = $(this).attr('method'); var data = $(this).serialize(); var dd = $(this); var res = validateInput(dd); if (!res) { $.ajax({ url: url, type: type, data: data, success: function (result) { dd.closest('.single-comment').find('.replies').eq(0).append(result); dd.removeClass('show'); var ddd = dd.closest('.single-comment').find('.replies .comment').last().offset().top; $("input[type=text], textarea").val(""); $([document.documentElement, document.body]).animate({ scrollTop: ddd - $(window).height() / 2 }, 500); } }) } else { dd.addClass('show'); dd.closest('div').find('.reply').css('display', 'none'); } })
$('.sabcomment').submit(function (e) { e.preventDefault(); var url = $(this).attr('action'); var type = $(this).attr('method'); var data = $(this).serialize(); var dd = $(this); var res = validateInput(dd); if (!res) { $.ajax({ url: url, type: type, data: data, success: function (result) { dd.closest('.comment').find('.subcomments').eq(0).append(result); var ddd = dd.closest('.comment').find('.subcomments .subcomment').last().offset().top; $("input[type=text], textarea").val(""); $([document.documentElement, document.body]).animate({ scrollTop: ddd - $(window).height() / 2 }, 500); dd.removeClass('show'); } }) } else { dd.addClass('show'); dd.closest('div').find('.reply').css('display', 'none'); } })
$('.sabcomment-reply').submit(function (e) { e.preventDefault(); var url = $(this).attr('action'); var type = $(this).attr('method'); var data = $(this).serialize(); var dd = $(this); var res = validateInput(dd); if (!res) { $.ajax({ url: url, type: type, data: data, success: function (result) { dd.closest('.subcomment').append(result); var ddd = dd.closest('.subcomment').find('.subcomment').last().offset().top; $("input[type=text], textarea").val(""); $([document.documentElement, document.body]).animate({ scrollTop: ddd - $(window).height() / 2 }, 500); dd.removeClass('show'); } }) } else { dd.addClass('show'); dd.closest('div').find('.reply').css('display', 'none'); } })
$(document).ready(function () { if ($('.login_page').length > 0) { var url = new URL(window.location.href); var c = url.searchParams.get("path"); if (c !== null) { window.localStorage.setItem('path', c); } } })
$(window).on('load', function () { if (window.location.pathname == '/home' && window.localStorage.getItem('path') && window.localStorage.getItem('path') != 'none') { var c = window.localStorage.getItem('path'); window.localStorage.setItem('path', 'none'); window.location.replace('/' + c); } })
$(document).ready(function () { setInterval(function () { if ($('.ml-subscribe-form')) { clearInterval(); $('.collaborate-page').find("style").remove(); $('.ml-form-fieldRow').addClass('form-item'); $('.collaborate-page').addClass('active'); $('.form-item').find('input').addClass('p font-regular'); if ($('.ml-block-form').find(':submit').find('i').length < 1) { $('.ml-block-form').find(':submit').addClass('btn h6').append('<i class="tcfPlus plus"></i>'); } } }, 800) })
$(document).ready(function () { $('.subscribe-button').on('click', function () { window.scrollTo({ top: $('.subscribe').offset().top - window.innerHeight / 3, behavior: "smooth" }) }) })
$(document).ready(function () { if ($('.links .link').length < 3) { $('.links').addClass('just'); } }); $(function () { let navLink = $('.map-title'), animateTime = 200; navLink.click(function () { let nav = $(this).closest('.each-map').find('.description'); $('.each-map').find('.description').stop().animate({ height: '0' }, animateTime); if (nav.height() === 0) { $(this).find('.plus').addClass('close'); autoHeightAnimate(nav, animateTime); } else { $(this).find('.plus').removeClass('close'); nav.stop().animate({ height: '0' }, animateTime); } }); })
$(function () {
    const wheelDots = $('.wheel__dot'); let deg = 0; for (let item of wheelDots) {
        item.style.transform = `rotate(${deg}deg) translate(-50%,-50%)`
        deg += (360 / wheelDots.length)
    }
})
$(function () {
    const wheelContents = $('.wheel__content'); let deg = 0; for (let item of wheelContents) {
        item.style.transform = `rotate(${deg}deg) translate(-50%,-50%)`
        deg += -(360 / wheelContents.length)
    }
})
$(document).ready(function () {
    $('.jx-knightlab').eq(0).remove(); let slider = $('.jx-slider'); let imgDiv = slider.find('.jx-image'); let imgTag = imgDiv.find('img'); let sliderWdt = slider.css('width'); imgTag.css('width', sliderWdt); imgDiv.find('.jx-label').addClass('h4 font-medium')
    $('.wheel__url').mouseenter(function () { $(this).parents('.wheel__dot').addClass('active'); }).mouseleave(function () { $(this).parents('.wheel__dot').removeClass('active'); }); $(document).on('click', function (e) { if ($(e.target).hasClass('close-popup') || $(e.target).hasClass('x-lines') || $(e.target).hasClass('popup')) { $('.popup').remove() } })
})
$(window).on('resize', function () { $('.jx-slider').find('.jx-image img').css('width', $('.jx-slider').parent().css('width')) })
$('.wheel__url').on('click', function (e) { if ($(window).outerWidth() < 1200) { $(this).attr('data-link', $(this).attr('href')); $(this).removeAttr('href', ''); $('body').append(`<div class='popup'><div class='block'><p>${$(this).find('.wheel__content_img_text').text()}</p><a href='${$(this).attr('data-link')}' target="_blank" class="btn h6 big">Visit Website<i class="tcfPlus plus"></i></a><div class="close-popup"><span class='x-lines'></span><span class='x-lines'></span></div></div></div>`) } })
$(window).on('load', function () {
    if (window.location.pathname.indexOf("submit-your-campaign") > -1 && window.location.pathname.indexOf("zh") === -1) {
        var leftPos, topPos, imgTranslate; if (window.innerWidth > 1600) {
            imgTranslate = '-50%'
            topPos = '55%'
            leftPos = '29.5%';
        } else if (window.innerWidth > 1024 && window.innerWidth < 1601) {
            topPos = '55%'
            leftPos = '23%'; imgTranslate = '-50%'
        } else {
            topPos = '51%'
            leftPos = '11.5%'; imgTranslate = '-70%'
        }
        $(".typeform-widget").before("<p style='position: absolute;top: 10%;left: 15%;z-index: 1;pointer-events: none;' class='h4 font-regular'>Can Your <span class='font-bold'>Crowdfunding</span> Campaign <span class='font-bold'>Raise <br/>Over $1M?</span></p>")
        $(".typeform-widget").after("<div style='pointer-events:none;position:absolute;top:" + topPos + ";left:" + leftPos + ";transform:translate(0%,0%);padding:24px 7%;background-color:#EEEFF3;border-radius:20px;'><div style='width:22%;padding-top:22%;position:absolute;left:0;bottom:0;transform:translate(" + imgTranslate + ",10%)'><img style='position:absolute;top:0;left:0;width:100%;height:100%;border-radius:10px;' src='https://i.ibb.co/QfnSwxH/image.png'/></div><h6 class='font-bold h7'>The three must-have things you need to raise $1M+ on crowdfunding</h6><h6 class='font-bold h7' style='margin-top:12px'>- a great product</h6><h6 class='font-bold h7' style='margin-top:12px'>- a compelling value proposition</h6><h6 class='font-bold h7' style='margin-top:12px'>- and TCF</h6><p class='font-bold h8' style='margin-top:20px'>Richard Stokes</p><p class='font-regular h8' style='margin-top:10px'>CEO and Founder at Winston Privacy. Raiser $1.6 Million</p></div>")
    }
    $(".typeform-widget").css('width', '97%');
})