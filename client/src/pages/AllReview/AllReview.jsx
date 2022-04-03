import React from "react";
import Helmet from "react-helmet";
import "./AllReview.module.css";

function AllReview() {
  return (
    <section className="View">
      <Helmet>
        <title> Review Board </title>
      </Helmet>
          <div class="text-box">
              <span class="heading-primary__main">
                  Nơi lưu giữ
              </span>
              <span class="heading-primary__sub">
                  phản hồi của khách hàng
              </span>
          </div>

          <div class="testimoials">
              <div class="row">
                  <div class="col span-1-of-3">
                      <blockquote>
                          Phan Thị Ánh
                          <cite>
                          "
                          Tận tình chu đáo, có nhiều khuyến mãi và chương trình chăm sóc khách hàng tuyệt vời!"
                      </cite>
                      </blockquote>
                  </div>

                  <div class="col span-1-of-3">
                      <blockquote>
                          Nguyễn Bá Trường
                          <cite>
                          "10đ spa, spa dịch vụ rất tốt. Spa tốt nhất Đà Nẵng"
                      </cite>

                      </blockquote>
                  </div>
                  <div class="col span-1-of-3">
                      <blockquote>
                          Lưu Thị Bảo Châu
                          <cite>
                          "Dịch vụ tuyệt vời, nhân viên nhiệt tình. Sẽ ghé lại nếu có dịp"
                      </cite>
                      </blockquote>
                  </div>
              </div>
              <div class="row">
                  <div class="col span-1-of-3">
                      <blockquote>
                          Phan Thị Ánh
                          <cite>
                              "
                              Tận tình chu đáo, có nhiều khuyến mãi và chương trình chăm sóc khách hàng tuyệt vời!"
                          </cite>
                      </blockquote>
                  </div>

                  <div class="col span-1-of-3">
                      <blockquote>
                          Nguyễn Bá Trường
                          <cite>
                              "10đ spa, spa dịch vụ rất tốt. Spa tốt nhất Đà Nẵng"
                          </cite>

                      </blockquote>
                  </div>
                  <div class="col span-1-of-3">
                      <blockquote>
                          Lưu Thị Bảo Châu
                          <cite>
                              "Dịch vụ tuyệt vời, nhân viên nhiệt tình. Sẽ ghé lại nếu có dịp"
                          </cite>
                      </blockquote>
                  </div>
              </div>

              <div class="row">
                  <div class="col span-1-of-3">
                      <blockquote>
                          Phan Thị Ánh
                          <cite>
                                  "
                                  Tận tình chu đáo, có nhiều khuyến mãi và chương trình chăm sóc khách hàng tuyệt vời!"
                              </cite>
                      </blockquote>
                  </div>

                  <div class="col span-1-of-3">
                      <blockquote>
                          Nguyễn Bá Trường
                          <cite>
                                  "10đ spa, spa dịch vụ rất tốt. Spa tốt nhất Đà Nẵng"
                              </cite>

                      </blockquote>
                  </div>

                  <div class="col span-1-of-3">
                      <blockquote>
                          Lưu Thị Bảo Châu
                          <cite>
                                  "Dịch vụ tuyệt vời, nhân viên nhiệt tình. Sẽ ghé lại nếu có dịp"
                              </cite>
                      </blockquote>
                  </div>
              </div>
          </div>
      </section>
  );
}
export default AllReview;