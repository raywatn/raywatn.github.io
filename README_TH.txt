FLYSTAY — MODERN WEBSITE + AFFILIATE PARTNER MANAGER

ไฟล์สำคัญ
- index.html: หน้าเว็บไซต์ลูกค้า (ดีไซน์ใหม่ modern / youthful)
- styles.css: รูปแบบเว็บไซต์ รองรับมือถือ
- app.js: ระบบค้นหาและเลือก Affiliate Partner อัตโนมัติ
- config.js: รายชื่อ Partner ที่เว็บไซต์ใช้งาน
- partner-admin.html: เครื่องมือจัดการ Partner สำหรับเจ้าของ (เปิดใช้ในเครื่องตัวเอง ไม่ควรเผยแพร่เป็นหน้าสาธารณะ)
- privacy.html / disclosure.html: หน้านโยบาย

เพิ่ม Airpaz และ Partner ใหม่
1. สมัครและได้รับอนุมัติ Affiliate จาก Airpaz หรือเครือข่ายที่ให้บริการ Airpaz ก่อน
2. ขอ Tracking Link / Deep Link ที่ถูกต้องจาก Partner (ห้ามเดา URL หรือใช้รหัสของคนอื่น)
3. เปิดไฟล์ partner-admin.html ในคอมพิวเตอร์ของคุณ
4. Airpaz มีรายการเตรียมไว้แล้วแต่ปิด Active อยู่ ให้ติ๊ก Active และ Flights
5. วาง Tracking Link ที่ได้รับอนุมัติในช่อง URL
6. หาก Partner ให้ URL template ที่รองรับพารามิเตอร์ค้นหา สามารถใช้ {origin}, {destination}, {depart}, {return}, {checkin}, {checkout}, {guests} ตามที่ Partner รองรับเท่านั้น
7. กด Download config.js
8. นำ config.js ที่ดาวน์โหลดไปแทนที่ flystay_website/config.js ใน GitHub repository แล้ว Commit changes
9. ทดสอบจากเว็บไซต์จริง โดยค้นหาเที่ยวบิน/โรงแรม แล้วตรวจสอบว่าลิงก์เปิดไป Partner ที่ถูกต้อง

เพิ่ม Partner ได้ไม่จำกัด
- กด Add partner เพื่อเพิ่มรายใหม่
- เลือก Active และประเภท Flights / Hotels
- Priority เลขน้อยกว่าจะถูกเลือกก่อน เมื่อมี Partner หลายรายที่ตรงกับประเภทเดียวกัน
- หากไม่พบ Partner ที่ Active ระบบใช้ Google Travel เป็น fallback (ไม่มีค่าคอมมิชชัน)

ข้อจำกัดด้านความปลอดภัยที่ต้องเข้าใจ
- GitHub Pages เป็น Static Hosting ไม่มีระบบ Backend/Admin login ที่ปลอดภัยในตัว
- partner-admin.html เป็นเครื่องมือสร้างไฟล์ config ในเครื่อง ไม่ได้บันทึกเข้าเว็บไซต์อัตโนมัติ และไม่ใช่ระบบล็อกอิน
- ไม่ควรอัปโหลด partner-admin.html ไปไว้ในเว็บไซต์สาธารณะ หากไม่ต้องการให้ผู้เข้าชมเปิดเครื่องมือนี้ได้
- config.js และ Tracking URL อาจถูกอ่านได้จาก Browser Developer Tools / source code แม้จะไม่แสดงบนหน้าเว็บลูกค้า
- ห้ามใส่รหัสผ่าน, API Secret, token หรือข้อมูลธนาคารใน config.js
- หากต้องการซ่อน Affiliate credentials อย่างแท้จริง ต้องใช้ Backend/Serverless Function และระบบ Admin ที่มี Authentication; GitHub Pages อย่างเดียวทำไม่ได้

หมายเหตุ
- การมีช่อง Airpaz ในระบบไม่ได้แปลว่าได้รับอนุมัติหรือเริ่มรับค่าคอมมิชชันแล้ว
- ต้องใช้ Tracking Link ของบัญชีคุณเองและผ่านการอนุมัติจาก Partner
- ระบบไม่รับประกันราคา การจอง หรือรายได้
