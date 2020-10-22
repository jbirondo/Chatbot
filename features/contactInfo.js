module.exports = function (controller) {
    controller.hears('Contact Information', 'message,direct_message', async (bot, message) => {
        await bot.reply(message, {
            text: "Eugene's contact information:",
            quick_replies: [
                {
                    title: "Email",
                    payload: "Email",
                },
                {
                    title: "LinkedIn",
                    payload: "LinkedIn",
                },
                {
                    title: "GitHub",
                    payload: "GitHub",
                },
            ]
        });
    });
    controller.hears("Email", 'message,direct_message', async (bot, message) => {
        await bot.reply(message, {
            text: "Email Eugene at jbirondo@gmail.com",
            quick_replies: [{ title: "Main menu", payload: "Main menu" }, { title: "Contact Information", payload:"Contact Information"}]
        })
    });
    controller.hears("LinkedIn", 'message,direct_message', async (bot, message) => {
        await bot.reply(message, {
            html: "<a href='https://www.linkedin.com/in/eugene-birondo-702637192/' target='_blank'>Eugene's LinkedIn</a>",
            quick_replies: [{ title: "Main menu", payload: "Main menu" }, { title: "Contact Information", payload:"Contact Information"}]
        })
    });
    controller.hears("GitHub", 'message,direct_message', async (bot, message) => {
        await bot.reply(message, {
            html: "<a href='https://github.com/jbirondo' target='_blank'>Eugene's GitHub</a>",
            quick_replies: [{ title: "Main menu", payload: "Main menu" }, { title: "Contact Information", payload:"Contact Information"}]
        })
    });
}