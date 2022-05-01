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
        window.location = "https://beautyspa2.herokuapp.com/page2.html";
    } else if (question_02 == "5" && count >= 25) {
        window.location = "https://beautyspa2.herokuapp.com/page2.html";
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
        window.location = "https://beautyspa3.herokuapp.com/page3.html";
    }
}

/* ======== page 2 ========= */
/*----- popup -----*/
function popup() {
    let params =
        'width=window.innerWidth,height=window.innerHeight,menubar=no,toolbar=no,location=no,status=no,resizable=no,scrollbars=no'
    open('https://www.facebook.com/', 'test', params);
}

/* ======== page 3 ========= */
/*----- check phone -----*/
function checkphone() {
    let myContent = document.getElementById("name");
    let count = (myContent.value).length;
    var regExp = /^(0[1-9][0-9]{8}|1[89]00[0-9]{4})$/;
    var phone = document.getElementById("phone").value;
    if (regExp.test(phone) && (count > 0))
        window.location = "https://beautyspa2.herokuapp.com/page5.html";
    else if (count == 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Bạn đã quên nhập tên của bạn?',
        })
    } else
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Số điện thoại của bạn không đúng định dạng',
        })
}

/*--------------------------------*/
// document.getElementById("rating3-1").onclick = function(a) {
//     document.getElementById("info").style.display = 'initial';
// };
// document.getElementById("rating3-2").onclick = function() {
//     document.getElementById("info").style.display = 'initial';
// };
// document.getElementById("rating3-3").onclick = function() {
//     document.getElementById("info").style.display = 'initial';
// };

// function fb() {
//     let params =
//         'width=window.innerWidth,height=window.innerHeight,menubar=no,toolbar=no,location=no,status=no,resizable=no,scrollbars=no'
//     open('https://www.facebook.com/BeautySpaDaNang/reviews/?ref=page_internal', 'test', params);
//     window.location = "http://127.0.0.1:5500/page5.html";
// };
// document.getElementById("rating3-4").onclick = function() {
//     Swal.fire({
//         text: 'Hãy đánh giá cho chúng mình trên fanpage dưới dạng đề xuất nhé',
//     })
//     setTimeout(fb, 3000)
// };

// document.getElementById("rating3-5").onclick = function() {
//     Swal.fire({
//         text: 'Hãy đánh giá cho chúng mình trên fanpage dưới dạng đề xuất nhé',
//     })
//     setTimeout(fb, 3000)
// };


// /*-----*/
// function check() {
//     var question = document.evaluate.rating3.value;
//     let myContent = document.getElementById("info");
//     let count = (myContent.value).length;
//     if (question == "0") {
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Bạn đã quên đánh giá sao cho chúng mình?',
//         })
//     } else if (count < 25) {
//         Swal.fire({
//             icon: 'warning',
//             title: 'Oops...',
//             text: 'Hãy nhận xét cho chúng mình ít nhất 25 ký tự bạn nhé',
//         })
//     } else {
//         window.location = "http://127.0.0.1:5500/page3.html";
//     }
// }