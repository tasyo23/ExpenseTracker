// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


    for (var select in $('.form-select-icon')) {
        let options = $(select).children();
        if (options.length > 0) {

            console.log($(select).val());
            let length = $(options).length;
            var selectNew = $(`<div class="select-icon"><p class="form-control"><img class="select-icon-img" src="${$(select).val()}"/></p></div>`);
            $(selectNew).on('click','p',function (e) {
                e.preventDefault();
                console.log('sjdhfjhdfjhfjskdhf');
            });
            let selectItems = $(`<ul  class="select-icon-wrap"></ul>`);
            for (var i = 0; i < $(options).length; i++) {
                let item = $('<li class="select-icon-item"></li>');
                let img = $("<img/>");
                $(img).attr('src',$(options[ i ]).data('icon'));
                $(img).attr('class','select-icon-img');
                item.append(img);
                selectItems.append(item);
            }
            $(select).siblings('label').after(selectNew.append(selectItems));
        }
    }




