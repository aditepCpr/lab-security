const cluster = require("cluster");
const axios = require("axios");
var qs = require('qs');

if (cluster.isMaster) {
    for (let i = 0; i < 10; i++) {
        cluster.fork();
    }
} else {
    var data = qs.stringify({
        'cow_ear_code': 'asdsa',
        'nid_code': '',
        'rfid_code': '',
        'pdo_code': '',
        'cow_birth': '28 ธันวาคม 2563',
        'cow_birth_submit': '2563-12-28',
        'cow_name': 'sad',
        'breed_id': '32',
        'cow_sex': 'F',
        'import_cow_type_id': '3',
        'cowges': '1',
        'build_id': '29',
        'herd_id': '18',
        'cow_fa_code': ' ',
        'cow_fa_nid': ' ',
        'cow_fa_rfid': ' ',
        'cow_fa_dpo': ' ',
        'cow_ma_code': ' ',
        'cow_ma_nid': ' ',
        'cow_ma_rfid': ' ',
        'cow_ma_dpo': ' ',
        'redirect-url': '/ZDairy/member/cow/import_cow',
        'credit_price': '2'
    });
    var config = {
        method: 'post',
        url: 'http://localhost:8088/ZDairy/member/cow/import_cow_add',
        headers: {
            'Cookie': 'JSESSIONID=0F1D38C791882A0745DE184B1D40278F; _ga=GA1.1.51456380.1587968948; _ga_ENZ33QM466=GS1.1.1588241737.11.1.1588243914.0; Pycharm-45b6b8ae=c865ff1f-cc18-4e0b-8a87-ccfa963abacd; __utmz=111872281.1606126234.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utma=111872281.51456380.1587968948.1608107377.1608527365.5; JSESSIONID=D7BE05132878C53CB07D407883B1A4F2',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}