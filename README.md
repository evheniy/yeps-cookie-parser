# YEPS Cookie Parser

[![NPM](https://nodei.co/npm/yeps-cookie-parser.png)](https://npmjs.org/package/yeps-cookie-parser)

[![npm version](https://badge.fury.io/js/yeps-cookie-parser.svg)](https://badge.fury.io/js/yeps-cookie-parser)
[![Build Status](https://travis-ci.org/evheniy/yeps-cookie-parser.svg?branch=master)](https://travis-ci.org/evheniy/yeps-cookie-parser)
[![Coverage Status](https://coveralls.io/repos/github/evheniy/yeps-cookie-parser/badge.svg?branch=master)](https://coveralls.io/github/evheniy/yeps-cookie-parser?branch=master)
[![Linux Build](https://img.shields.io/travis/evheniy/yeps-cookie-parser/master.svg?label=linux)](https://travis-ci.org/evheniy/)
[![Windows Build](https://img.shields.io/appveyor/ci/evheniy/yeps-cookie-parser/master.svg?label=windows)](https://ci.appveyor.com/project/evheniy/yeps-cookie-parser)

[![Dependency Status](https://david-dm.org/evheniy/yeps-cookie-parser.svg)](https://david-dm.org/evheniy/yeps-cookie-parser)
[![devDependency Status](https://david-dm.org/evheniy/yeps-cookie-parser/dev-status.svg)](https://david-dm.org/evheniy/yeps-cookie-parser#info=devDependencies)
[![NSP Status](https://img.shields.io/badge/NSP%20status-no%20vulnerabilities-green.svg)](https://travis-ci.org/evheniy/yeps-cookie-parser)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/evheniy/yeps-cookie-parser/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/evheniy/yeps-cookie-parser.svg)](https://github.com/evheniy/yeps-cookie-parser/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/evheniy/yeps-cookie-parser.svg)](https://github.com/evheniy/yeps-cookie-parser/network)
[![GitHub issues](https://img.shields.io/github/issues/evheniy/yeps-cookie-parser.svg)](https://github.com/evheniy/yeps-cookie-parser/issues)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/evheniy/yeps-cookie-parser.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)


## How to install

    npm i -S yeps-cookie-parser
  

## How to use

    const App = require('yeps');
    const cookies = require('yeps-cookie-parser');
    
    const app = new App();
    
    app.all([
        cookies();
    ]);
    
    app.then(async ctx => {
        console.log(ctx.request.cookies);
    });


#### [YEPS documentation](http://yeps.info/)