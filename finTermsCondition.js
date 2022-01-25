import http from 'k6/http';
import { SharedArray } from "k6/data";
import { scenario } from 'k6/execution';
import { vu } from 'k6/execution';





export default function () {
    const url = 'https://nvistaqa10.icpqa.volvocars.biz/Vista-RestService/service/tacdisservice/finTermsCondition';
    const payload = JSON.stringify({
        fin : '1318162',
    });

    const params = {
        headers: {
          'sourceSystem': 'TACDIS',
          'cdsid': 'VCCTEST5',
          'partnerId': '6SE0292',
          'distributorId' : '3SE0790',
          'cookie' : 'vts_nVista_Test=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiQmVhcmVyIiwiYXVkIjoiblZpc3RhX1Rlc3QiLCJzdWIiOiJwX2ludGVybmFsX3FhIiwiZmlyc3ROYW1lIjoiIiwiZ3JvdXBzIjpbXSwidnRpIjoiNGEzNmJiYzYtZWRlZC00Zjc1LWJmMmQtMTcwNjY3MjVkYWE4IiwiaXNzIjoidm9sdm9jYXJzIiwiZXhwIjoxNjU0Mjc4NjA4LCJpYXQiOjE2MjI3NDI2MDh9.sAJfXtQR1DczyQULPoIx0JAguDWL0v8VxjXa8jQQKKQARQ5TUxfUxdTW6LTfsL_AtzTjCNeL6xZm13FUL-Ugpl_wgFUCF2I5tpnCgRdYenaU4QOAVvZ7m-82oZLhh01kVo06fi0a0p0HyG6yWMgYL5xtlNPRSdLq3d3iq_uqbAwg3KpIF_ZSbuAhXNeCOAbRqB-QKYzZW_fE-aYM4iU78okTFBGYIrpk6qpV-DI-ngBZlm8-bJycSKSB9_ZlQIjaNANWzkMuT-5wM1DtDrJh8qp8WfL1pysUep47z7XR3xkguq4OsMbIvb23E7YSMSxhA2b5Ep5U_5DckEDt2B_HDy_MM5NKTBLaPpWXMYnd-XIevnwlGZyrl5zGHrV7U6DRjhT0bg7dW5S5b7J6XdKjjfgwGeHDyrVsr_agpckiWlsT7oFnftz1SLyOqRYZ5_cUXUssM2Lvlys04eDT4zlUQPgu4x2cKlgtj8ZKKni3NHjwR8Igc3d2lR7QvfWgj_88lmjWrG-GxhbEwI3FRfut6V4n_d52SVNHDiM0k1F0zatysqMnCNVNdjsDi5BTB_r3MFpvMHyFf9y3wcP2D_EMeMFxL0Mr1wV9mncFSGNmX7kPBTA2rsVj7nlqUDX15Udeqq9LU3m5aw2Ad4lGgXIyaUD9qGpifiPM6fwlpsRZb0o',
          'Content-Type': 'application/json',
        },
    };
  let resp = http.post(url, payload, params);
  console.log('Response:'+ resp.body); 
 
   
}


