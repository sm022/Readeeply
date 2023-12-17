require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/clova', async (req, res) => {
  const { data } = req.body;

  try {
    const response = await axios.post(process.env.CLOVA_API_URL, data, {
      headers: {
        'Content-Type': 'application/json',
        'X-CLOVA-API-KEY': process.env.CLOVA_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('클로바 API 요청 실패: ', error);
    res.status(500).send('API 요청 중 오류가 발생했습니다');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
