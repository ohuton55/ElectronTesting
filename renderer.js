const nowDate = new Date();
let year = nowDate.getFullYear();
let month = nowDate.getMonth() + 1;
let date = nowDate.getDate();
let text = year + "/" + month + "/" + date;
const yymmdd = document.getElementById('yymmdd');
yymmdd.innerText = text;

const title = document.getElementById('title');
title.innerText = 'Happy Helloween!';

const information = document.getElementById('info');
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

document.write(AA);

const func = async () => {
        const response = await window.versions.ping();
        consle.log(response);
}
