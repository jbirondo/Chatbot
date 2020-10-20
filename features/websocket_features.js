/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {

        console.log('Loading sample web features...');

        controller.hears(new RegExp('quick'), 'message', async (bot, message) => {

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