const { MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = async (msg, args) => {
    if (!args.length) { //no args
        fetch('https://dog.ceo/api/breeds/image/random')
                    .then(res => res.json())
                    .then(json => {
                        const attachment = new MessageAttachment(json.message);
                        msg.channel.send(attachment);
                    }).catch(err => {
                        console.log(err)
                        console.log("fuck this");
                    });
    } else {

        if (args === 'list') {
            msg.channel.send({embed: {
                color: 3447003,
                title: "Full list of dog breeds can be found here",
                url: "https://dog.ceo/dog-api/documentation/",
          }});
        } else {
            fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
                    .then((resp) => resp.json()) // Transform the data into json
                    .then(function(data) {
                        if (data.status == 'error') {
                            throw new Error(data.message);
                        } else {
                            const attachment = new MessageAttachment(data.message);
                            msg.channel.send(attachment);
                        }
                    }).catch(err => {
                        //do something
                        msg.channel.send(err.message);
                        msg.channel.send({embed: {
                            color: 3447003,
                            title: "Full list of dog breeds can be found here",
                            url: "https://dog.ceo/dog-api/documentation/",
                        }});
                    })  
        }
    }
}

// module.exports = async (msg, args) => {
//     message = msg.content.toLowerCase();
//             if (message.match(`!dog [a-zA-Z]*`)) {
//                 var split = message.split(" ");
//                 var breed = split[1];
//                 if(breed === 'list') {
//                     msg.channel.send({embed: {
//                             color: 3447003,
//                             title: "Full list of dog breeds can be found here",
//                             url: "https://dog.ceo/dog-api/documentation/",
//                       }});

//                 } 
//                  else {
//                     fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
//                     .then((resp) => resp.json()) // Transform the data into json
//                     .then(function(data) {
//                         if (data.status == 'error') {
//                             throw new Error(data.message);
//                         } else {
//                             const attachment = new MessageAttachment(data.message);
//                             msg.channel.send(attachment);
//                         }
//                     }).catch(err => {
//                         //do something
//                         msg.channel.send(err.message);
//                         msg.channel.send({embed: {
//                             color: 3447003,
//                             title: "Full list of dog breeds can be found here",
//                             url: "https://dog.ceo/dog-api/documentation/",
//                         }});
//                     })  
//                 }
//             } else {
//                 fetch('https://dog.ceo/api/breeds/image/random')
//                     .then(res => res.json())
//                     .then(json => {
//                         const attachment = new MessageAttachment(json.message);
//                         msg.channel.send(attachment);
//                     }).catch(err => {
//                         console.log(err)
//                         console.log("fuck this");
//                     });
//             }
// }

// module.exports = {
//     dealWithDog
// };