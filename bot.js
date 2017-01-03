var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexDa = /^\/dae/; botRegex4d = /^\/4th/; botRegexDon = /^\/correct/; botRegexNo = /^\/wrong/;
      botRegexWat = /^\/what/; botRegexDeal = /^\/notabigdeal/; botRegexLit = /^\/litty/; botRegexPly = /^\/playoffs/; 
      botRegexJsh = /^\/josh/; botRegexZk = /^\/zeke/; botRegexTw = /^\/21/;
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
   else if(request.text && botRegexDa.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/540x960.png.d946e263ad1e427f9cf739bcb626f78b");
    this.res.end();
   }
  else if(request.text && botRegexZk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/960x540.gif.377ae8a3a94d4abab13e693196767cd3");
    this.res.end();
  }
  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/669x475.jpeg.0e19247fd8214658b78863efe178e7c0");
    this.res.end();
  }
  else if(request.text && botRegexLit.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/310x233.gif.f8466181bf184a1a964ef0ee9ba5a604");
    this.res.end();
  }
  else if(request.text && botRegexNo.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/3oz8xLd9DJq2l2VFtu/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexDeal.test(request.text)) {
    this.res.writeHead(200);
    postMessage("issa big deal");
    this.res.end();
  }
  else if(request.text && botRegexWat.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media2.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexJsh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/375x666.png.80ba58e665534ffb8e2e1fc2054d1e31");
    this.res.end();
  }
  else if(request.text && botRegexPly.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/258x222.gif.e5ceb901c9b04b6190a74eea635fe78b");
    this.res.end();
  }
  else if(request.text && botRegexDon.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/26tknCqiJrBQG6bxC/giphy.gif");
    this.res.end();
    
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

exports.respond = respond;
