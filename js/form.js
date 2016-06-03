/// <reference path="jquery-1.12.3.js" />


$(function () {

    $(".send-btn").click(function () {

        var validatot = $('.myform').validate({
            rules: {
                text_name:{required: true, maxlength:7 },
                text_email: {required:true, email:true},
                text_message:{required:true}
            },
            messages: {
                text_name: { maxlength: "填寫正確名稱" },
                text_email: { email: "error", required: "不得空白" },
                text_message:{required:"Say Something"}
            },
            errorPlacement: function (error, element) {
                if (element.attr("name") == "text_name") {
                    error.appendTo("#error_name");
                }
                if (element.attr("name") == "text_email") {
                    error.appendTo("#error_email");
                }
                if (element.attr("name") == "text_message") {
                    error.appendTo("#error_message");
                }
            }

        });

        $(".myform").validate();





    });







});