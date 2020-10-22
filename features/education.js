module.exports = function (controller) {
    controller.hears('Education', 'message,direct_message', async (bot, message) => {
        await bot.reply(message, {
            text: "Eugene attended the following schools:",
            quick_replies: [
                {
                    title: 'De Anza Community College',
                    payload: 'De Anza Community College',
                },
                {
                    title: 'San Jose State University',
                    payload: 'San Jose State University',
                },
                {
                    title: 'App Academy',
                    payload: 'App Academy',
                },
            ]
        });
    });
    controller.hears('De Anza Community College', 'message,direct_message', async (bot, message) => {
        await bot.reply(message, {
             text: 'Eugene attended De Anza Community College from 2005-2008.', 
             quick_replies: [{ title: "Main menu", payload: "Main menu" }, { title: "Education", payload: "Education" }] 
            })
    });
    controller.hears('San Jose State University', 'message,direct_message', async (bot, message) => {
        await bot.reply(message, {
             text: 'Eugene attended San Jose State University from 2008-2011 and graduated with a B.S. in Justice Studies.', 
             quick_replies: [{ title: "Main menu", payload: "Main menu" }, { title: "Education", payload: "Education" }] 
            })
    });
    controller.hears('App Academy', 'message,direct_message', async (bot, message) => {
        await bot.reply(message, {
             text: 'Eugene attended App Academy in the spring of 2019', 
             quick_replies: [{ title: "Main menu", payload: "Main menu" }, { title: "Education", payload: "Education" }] 
            })
    });
}