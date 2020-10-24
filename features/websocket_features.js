
module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {

        controller.hears(['hi', 'hello', 'howdy', 'hey', 'aloha', 'hola', 'bonjour', 'oi', 'main menu', 'Main menu'], 'message', async (bot, message) => {

            await bot.reply(message,{

                text: 'What do you want to know about Eugene?',
                quick_replies: [
                    {
                        title: 'Job History',
                        payload: "Job History",
                    },
                    {
                        title: 'Education',
                        payload: 'Education',
                    },
                    {
                        title: 'Tech Stack',
                        payload: 'Tech Stack',
                    },
                    {
                        title: 'Contact Information',
                        payload: 'Contact Information',
                    }
                ]
            });
        });


    }

}