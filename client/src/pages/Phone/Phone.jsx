import React from "react";
import Helmet from "react-helmet";
import "./Phone.css";
import { useNavigate } from "react-router-dom";

function Phone() {
  const navigate = useNavigate();

  const checkphone = (e) => {
   
    var regExp = /^(0[1-9][0-9]{8}|1[89]00[0-9]{4})$/;
    var phone = document.getElementById("phone").value;
    if (regExp.test(phone)){
      e.preventDefault();
      navigate("/all-review");}
    else{
      e.preventDefault();
      alert("Số điện thoại không đúng định dạng");
    }
  }

  return (
    <section className="Share_bg">
    <Helmet>
      <title>Contact address </title>
    </Helmet>
      <div className="first">
        <h2>
          <span className="heading-primary_main">
            Cảm ơn bạn đã đánh giá về dịch vụ của Beauty Spa
          </span>
          <br />
          <span className="note">
            Mỗi một góp ý là một niềm vui, là động lực để chúng tôi phát triển
            tốt hơn.
            <hr />
          </span>
        </h2>
      </div>

      <div className="under">
        <h1>
          <span className="contact">
            Bạn có thể chia sẻ thông tin liên lạc để nhân viên chúng tôi có thể
            liên hệ và giải quyết thích đáng về vấn đề mà bạn đang gặp phải
          </span>
        </h1>
        <div className="sdt">
          <form className="form1">
            <input type="text" id="phone" placeholder="Nhập số điện thoại" />
            <input
              type="submit"
              className="btn"
              value="Gửi"
              onClick={(e) => {
              checkphone(e)
              }}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Phone;
