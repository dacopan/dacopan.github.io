/* 
 * Copyright (C) 2016 dacopan
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
$(function () {

//lazy load
    if ($('img.lazy').size() > 0) {
        $('img.lazy').lazyload({
            effect: "fadeIn"
        });
    }

    if ($('.bg-lazy').size() > 0) {
        $('.bg-lazy').lazyload({
        });
    }
    //init bootstrap
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

});

$(window).load(function () {
    $(".preloader .status").fadeOut();
    $(".preloader").delay(500).fadeOut("slow");
    if (!isMobile()) {
        console.log('animation enabled:' + navigator.userAgent);
        new WOW().init();
    }


});

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}