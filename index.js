var http = require('http'); // node 내장 모듈 불러옴
var hostname = '127.0.0.1'; // localhost와 동일
var port = 8080;

const server = http.createServer(function (req, res) {
    // console.log('REQUEST :', req);
    // res.end('Hello Client!!'); // end라는 메소드를 통해서 서버에게 string을 반환시켜 준거에요~!
    const path = req.url; //req.url에는 port와 ip번호를 제외한 url이 들어가게 됩니다.
    const method = req.method;
    // 아티클 정보를 받아오는 요청
    if (path === '/puppies') {
        if (method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const puppies = JSON.stringify([
                {
                    name: '누벨링',
                    status_price: 10000,
                },
            ]);
            res.end(puppies);
        } else if (method === 'POST') {
            res.end('퍼피 정보가 생성되었습니다!');
        }
    }
    res.end('Good Bye~~!! 안녕~~!!');
});

// listen은 개발적 용어에서 기다리고 있다는 거에요.
server.listen(port, hostname);

console.log('shiloh market server on!!');
