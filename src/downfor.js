const https = require('https')


const API_BASE = "https://api.downfor.cloud/httpcheck/"

const sendRequest = (url) => {
  return new Promise((res, rej) => {
    
    if(!url) res(false)

    https.get(API_BASE + url, resp => {
      
      let data = ''
      resp.on('data', chunk => data += chunk)

      resp.on('end', () => res(JSON.parse(data)))

      resp.on('error', rej)

    });

  })
}

const checkWebsite = async (url) => {
  
  const status = await sendRequest(url)

  return status

}

module.exports = checkWebsite
