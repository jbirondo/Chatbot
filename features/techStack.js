module.exports = function (controller) {
    controller.hears('Tech Stack', 'message,direct_message', async (bot, message) => {
        await bot.reply(message, {
            text: "Eugene has been sharpening his skills in Ruby, Ruby on Rails, JavaScript, Python, Flask, React, Redux, Node.js, AWS, Heroku, Docker, GraphQL, Linux, and Unix for the past 2+ years. Here are some projects that utilize those technologies:",
            quick_replies: [
                {
                    title: 'JavaScript Tower Defense',
                    payload: 'JavaScript Tower Defense',
                },
                {
                    title: 'BadReads',
                    payload: 'BadReads',
                },
                {
                    title: 'VOR Draft Aid',
                    payload: 'VOR Draft Aid',
                },
            ]
        });
    });
    controller.hears('JavaScript Tower Defense', 'message,direct_message', async (bot, message) => {
        await bot.reply(message, {
             html: "<a href='https://jbirondo.github.io/dist/index' target='_blank'>JavaScript Tower Defense</a>", 
             quick_replies: [{ title: "Main menu", payload: "Main menu" }] 
            })
    });
    controller.hears('BadReads', 'message,direct_message', async (bot, message) => {
        await bot.reply(message, {
             html: "<a href='https://quiet-shore-31528.herokuapp.com/#/' target='_blank'>BadReads</a>", 
             quick_replies: [{ title: "Main menu", payload: "Main menu" }] 
            })
    });
    controller.hears('VOR Draft Aid', 'message,direct_message', async (bot, message) => {
        await bot.reply(message, {
             html: "<a href='http://vordraftapp.herokuapp.com/' target='_blank'>Value Over Replacement Draft Aid</a>", 
             quick_replies: [{ title: "Main menu", payload: "Main menu" }] 
            })
    });
}