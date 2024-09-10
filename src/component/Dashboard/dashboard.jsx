import React from 'react';
import '../Dashboard/mobile.css'; // Assuming you store the CSS here

function Mobiledashboard() {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="menu-icon">≡</div>
          <h1 className="title">SMART TICKET</h1>
        </header>

        <nav className="breadcrumb">
          <p>ข้อมูลผู้ขับขี่ &gt; การแจ้งข้อหากับผู้กระทำความผิด</p>
        </nav>

        <div className="content">
          <div className="info-box">
            <h4>ข้อมูลเจ้าของรถ/ผู้ครอบครอง</h4>
            <p><strong>เลขที่ใบสั่ง :</strong> 00001</p>
            <p><strong>ชื่อผู้ขับขี่ :</strong> นายศิศักกร ชาญเชี่ยว</p>
            <p><strong>เลขบัตรประชาชน :</strong> 11014015XXXXX</p>
            <p><strong>ใบอนุญาตขับขี่เลขที่ :</strong> 52003XXX</p>
            <p><strong>วันอนุญาต :</strong> 7 กันยายน 2556</p>
            <p><strong>ออกโดยนายทะเบียนจังหวัด :</strong> กรุงเทพฯ</p>
            <p><strong>ชนิดใบขับขี่ :</strong> รถยนต์ส่วนบุคคล</p>
          </div>

          <div className="buttons">
            <button className="btn cancel">ยกเลิก</button>
            <button className="btn save">บันทึก</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobiledashboard;
