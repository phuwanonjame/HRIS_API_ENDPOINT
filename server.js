const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();

// โหลด openapi.yaml
const swaggerDocument = YAML.load(path.join(__dirname, 'openapi.yaml'));

// เปิด Swagger UI ที่ /docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Swagger UI is running at http://localhost:${PORT}/docs`);
});
