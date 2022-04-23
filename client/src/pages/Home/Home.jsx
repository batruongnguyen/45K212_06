import React, { useEffect, useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faEnvelope,
  faMapMarkerAlt,
  faStar,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Home() {
  const navigate = useNavigate();
  const [starIndex, setStarIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState(-1);

  useEffect(() => {
    if (starIndex == -1) return;
    if (starIndex + 1 <= 3) {
      document.getElementById("info").style.display = "initial";
    } else {
      document.getElementById("info").style.display = "none";
      Swal.fire(
        "Hãy đánh giá cho chúng mình trên fanpage dưới dạng đề xuất nhé~"
      );
      // if (result.isConfirmed) navigate("/all-review");
      
      setTimeout(() => {
        let params =
          "width=window.innerWidth,height=window.innerHeight,menubar=no,toolbar=no,location=no,status=no,resizable=no,scrollbars=no";
        window.open(
          "https://www.facebook.com/BeautySpaDaNang/reviews/?ref=page_internal",
          "test",
          params
        );
        navigate("/all-review");
      }, 2000);
      
    }
  }, [starIndex]);

  return (
    <>
      <header>
        <div className="text-box">
          <h1>
            <span className="heading-primary__main">
              <p
                onClick={() => {
                  document
                    .querySelector("#rating")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Beauty Spa
              </p>
            </span>
            <span className="heading-primary__sub">
              Be natural, be beautiful, Be you.
            </span>
          </h1>
        </div>
      </header>

      <section className="rating-section" id="rating">
        <h3>Đánh Giá Dịch Vụ</h3>
        <form name="evaluate">
          <div className="stars_container">
            {[...Array(5)].map((_, index) => {
              return (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  size="3x"
                  color={
                    hoverIndex === -1
                      ? starIndex === -1 || index > starIndex
                        ? "#ddd"
                        : "#ffb91d"
                      : index <= hoverIndex
                      ? "#ffb91d"
                      : "#ddd"
                  }
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(-1)}
                  onClick={() => setStarIndex(index)}
                  className="star"
                />
              );
            })}
          </div>

          <div className="comment">
            <textarea
              id="info"
              placeholder="Hãy chia sẻ những trải nghiệm của bạn tại đây nhé"
            ></textarea>
            <br />
            <div className="wrapper">
              <div className="file-upload">
                <input type="file" />
                <FontAwesomeIcon icon={faCamera} />
              </div>
              <input
                type="submit"
                className="btn"
                value="Gửi đánh giá"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/phone");
                }}
              />
            </div>
          </div>
        </form>
      </section>

      <section className="footer-section">
        <h3>Về chúng tôi</h3>
        <p>Yêu cái đẹp là thưởng thức. Tạo ra cái đẹp là nghệ thuật</p>

        <div className="icon">
          <ul className="socials">
            <li>
              <a href="https://www.facebook.com/BeautySpaDaNang/">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                <br />
                Beauty Spa
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/beautyspadanang/?fbclid=IwAR1MFv8YdReaJgBOZIRtk6MOV_oY7HXtq21V9W7oLSXBBzdun8pJAbuZros">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                <br />
                @beautyspa
              </a>
            </li>
            <li>
              <a href="#" className="cursor">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <br />
                Contact.beautyspadanang@gmail.com
              </a>
            </li>
            <li>
              <a href="#" className="cursor">
                <FontAwesomeIcon icon={faPhone} size="2x" />
                <br />
                0357080172              
              </a>
            </li>
            <li>
              <a href="https://bit.ly/3N502n0">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
                <br />
                353 Điện Biên Phủ, Đà Nẵng
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
