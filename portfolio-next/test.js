const { convertToModelMessages } = require('ai');
(async () => {
   console.log(await convertToModelMessages([{role:"user", id:"1", parts:[{type:"text", text:"hello"}]}]));
})();
