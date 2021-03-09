import fetch from 'node-fetch';

fetch("https://qiita.com/myLifeAsaDog/items/92b0a89110d14bf59dba").then(data => { console.log(data) })