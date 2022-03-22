/* ------ Scroll ----- */
$(document).ready(
    function() {
        $('a').click(function(event) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 700);
            event.preventDefault();
        })
    }
)

/*------ check -----*/
function check() {
    var question_01 = document.evaluate.rating3.value;
    var question_02 = document.evaluate.rating3.value;
    var question_03 = document.evaluate.rating3.value;
    let myContent = document.getElementById("info");
    let count = (myContent.value).length;
    if (question_01 == "4" && count >= 25) {
        window.location = "http://127.0.0.1:5500/page2.html";
    } else if (question_02 == "5" && count >= 25) {
        window.location = "http://127.0.0.1:5500/page2.html";
    } else if (question_03 == "0") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Bạn đã quên đánh giá sao cho chúng mình?',
        })
    } else if (count < 25) {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Hãy nhận xét cho chúng mình ít nhất 25 ký tự bạn nhé',
        })
    } else {
        window.location = "http://127.0.0.1:5500/page3.html";
    }
}

/*----- popup -----*/
function popup() {
    let params =
        'width=window.innerWidth,height=window.innerHeight,menubar=no,toolbar=no,location=no,status=no,resizable=no,scrollbars=no'
    open('https://www.facebook.com/', 'test', params);
}

/*----- check phone -----*/
function formValidate() {
    var regExp = /^(0[234][0-9]{8}|1[89]00[0-9]{4})$/;
    var phone = document.getElementById("phone").value;
    if (regExp.test(phone))
        alert('SĐT hợp lệ!');
    else
        alert('SĐT không hợp lệ!');
}