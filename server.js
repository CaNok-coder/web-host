const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("✅ Webhook server is running!");
});


app.get('/webhook/gt1s', (req, res) => {
  console.log("Nhận được callback từ GT1s:", req.query);

  const { status, amount, content, message } = req.query;

  if (status === '1') {
    console.log(✅ Thành công: +${amount} VNĐ - USER ID: ${content});

  } else {
    console.log(❌ Lỗi nạp: ${message});
  }

  res.send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Server đang chạy tại cổng ${PORT});
});
