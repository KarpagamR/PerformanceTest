import http from 'k6/http';
import encoding from 'k6/encoding';

const username = 'vistauser';
const password = 'mcnkdSJI32';

/*export const options = {
    stages: [
      { duration: '30s', target: 20 },
      { duration: '30s', target: 10 },
      { duration: '20s', target: 0 },
    ],
  };*/

export default function () {
  const url = 'https://nvista-configurator-qa.icpqa.volvocars.biz/api/vista/cce/policy';
  const payload = JSON.stringify({
        partner:'3SE0790',
        countryCode: "SE",
        specMarket: "110",
        brand: "VCC"
  });

  const credentials = `${username}:${password}`;
  const encodedCredentials = encoding.b64encode(credentials);

  const params = {
    headers: {
      'Authorization': `Basic ${encodedCredentials}`,
      'Content-Type': 'application/json',

    },
  };

  let resp = http.post(url, payload, params);
  console.log('Response:'+ resp.json().policy);
  
}
