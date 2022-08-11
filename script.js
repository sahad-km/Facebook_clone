$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
        fname:{
            required:true,
            minlength:4,
            maxlength:7
        },
        sname:{
            required:true,
            minlength:4
        },
        emailaddress:{
            required:true,
            email:true
        },
        password:{
            minlength:6
        },
        day:{
            required:true
        },
        foo:{
            required:true
        }    },
    messages:{
        fname:{
        required:"enter first name",
        minlength:"enter atleast 4 characters"
    }
    }
    })
})