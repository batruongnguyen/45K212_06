$(document).ready(
  function () {

    // Scroll
    $('a').click(function (event) {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 700);
      event.preventDefault();
    }
    )

  }

)

function check() {
  var question_01 = document.evaluate.rating3.value;
  var question_02 = document.evaluate.rating3.value;
  var question_03 = document.evaluate.rating3.value;
  if (question_01 == "4") {
    window.location = "http://127.0.0.1:5500/page2.html";
  }
  else if (question_02 == "5") {
    window.location = "http://127.0.0.1:5500/page2.html";
  }
  else if(question_03 == "0"){
    alert("Hãy đánh giá");
  }
  else {
    window.location = "http://127.0.0.1:5500/page3.html";
  }
}

function popup() {
  let params =
    'width=window.innerWidth,height=window.innerHeight,menubar=no,toolbar=no,location=no,status=no,resizable=no,scrollbars=no'
  open('https://www.facebook.com/', 'test', params);
}