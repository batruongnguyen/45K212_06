import React from 'react'
import Helmet from "react-helmet";

function Admin() {
  return (
    <section className="TK">
    <Helmet>
    <title>Admin </title>
  </Helmet>
  <h1>THỐNG KÊ</h1>
  <div class='table'>
<table>
  <tr>
    <th>Liên hệ</th>
    <th>Nhận xét</th>
    <th>Số sao</th>
    <th>Link ảnh</th>
  </tr>
</table>
  </div>
  </section>
  )
}

export default Admin