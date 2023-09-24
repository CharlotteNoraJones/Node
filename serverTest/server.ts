import http from 'http';
import fs from 'fs';
import _ from 'lodash';

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    // lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
    greet();

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path: string = './views/';

    switch(req.url) {
     case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
    case '/about-me':
        path += 'about.html';
        res.statusCode = 301;
        break;
    default: 
        path += '404.html';
        res.statusCode = 404;
        break;
    }

    // send an html file
    fs.readFile(path, (err: any, data: any) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data)
            res.statusCode = 200;
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});