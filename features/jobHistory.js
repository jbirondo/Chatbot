module.exports = function(controller) {

    controller.hears('Job History','message,direct_message', async(bot, message) => {
        await bot.reply(message, {
            text: "Eugene has worked at the following places:",
            quick_replies: [
                {
                    title: 'San Jose Public Library',
                    payload: 'San Jose Public Library',
                },
                {
                    title: 'Crestwood Behavioral Health PHF',
                    payload: 'Crestwood Behavioral Health PHF',
                },
                {
                    title: 'Momentum for Mental Health',
                    payload: 'Momentum for Mental Health',
                },
            ]
        });
    });
        controller.hears('San Jose Public Library', 'message,direct_message', async (bot, message) => {
            await bot.reply(message, { text:'Eugene worked as a Library Aide from 2009-2011 and as a Library Page from 2011-2013.', quick_replies: [{ title: "Main menu", payload: "Main menu"}, {title: "Job History", payload: "Job History"}]})
        });
        controller.hears('Crestwood Behavioral Health PHF', 'message,direct_message', async (bot, message) => {
            await bot.reply(message, { text:'Eugene worked as a Rehabilitation Aide from 2012-2013 and as a Mental Health Service Coordinator from 2013-2015.', quick_replies: [{ title: "Main menu", payload: "Main menu"}, {title: "Job History", payload: "Job History"}]})
        });
        controller.hears('Momentum for Mental Health', 'message,direct_message', async (bot, message) => {
            await bot.reply(message, { text:'Eugene worked as a Mental Health Bridge Service Coordinator from 2015-2018.', quick_replies: [{ title: "Main menu", payload: "Main menu"}, {title: "Job History", payload: "Job History"}]})
        });
}
