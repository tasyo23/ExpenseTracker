// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


let selectItems = $('.form-select-icon');
for (var num = 0; num < selectItems.length; num++) {
    let select = selectItems[ num ];
    $(select).hide();
    let options = $(select).children();
    if (options.length > 0) {

        let length = $(options).length;
        var selectNew = $(`<div class="select-icon"><p class="form-control select-icon-current "><img class="select-icon-img" src="${$(select).val()}"/></p></div>`);
        $(selectNew).on('click','p',{ elem: $(select) },function (e) {
            e.preventDefault();
            $(this).siblings('.select-icon-wrap').first().toggleClass('select-icon-wrap-show');
            $(this).siblings('.select-icon-wrap').children('.select-icon-item').on("click",{ elem: e.data.elem },selectIcon);
        });
        let selectItems = $(`<ul  class="select-icon-wrap"></ul>`);
        for (var i = 0; i < $(options).length; i++) {
            let item = $(`<li class="select-icon-item" data-icon="${$(options[ i ]).data('icon')}"></li>`);
            let img = $(`<img src="${$(options[ i ]).data('icon')}" class="select-icon-img"/>`);
            item.append(img);
            selectItems.append(item);
        }

        $(select).prev('label').after(selectNew.append(selectItems));
    }
}


function selectIcon (event) {
    event.preventDefault();
    $('.select-icon-wrap').removeClass('select-icon-wrap-show');
    $(event.data.elem).val($(this).data('icon'));
    $(event.data.elem).attr('value',$(this).data('icon'));
    $(event.target).parent().siblings('.select-icon-current').first().children('img').attr('src',$(this).data('icon'));
}