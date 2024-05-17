// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let options = $('.form-select-icon').children();
console.log(options[0].value);
for (let option in options) {
    console.log(option.val)
}