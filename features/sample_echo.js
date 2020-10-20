/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    // controller.hears('sample','message,direct_message', async(bot, message) => {
    //     await bot.reply(message, 'I heard a sample message.');
    // });

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
            await bot.reply(message, 'Eugene worked as a Library Aide from 2009-2011 and as a Library Page from 2011-2013.');
        });
        controller.hears('Crestwood Behavioral Health PHF', 'message,direct_message', async (bot, message) => {
            await bot.reply(message, 'Eugene worked as a Rehabilitation Aide from 2012-2013 and as a Mental Health Service Coordinator from 2013-2015.');
        });
        controller.hears('Momentum for Mental Health', 'message,direct_message', async (bot, message) => {
            await bot.reply(message, 'Eugene worked as a Mental Health Bridge Service Coordinator from 2015-2018.');
        });

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
            await bot.reply(message, 'Eugene attended De Anza Community College from 2005-2008.');
        });
        controller.hears('San Jose State University', 'message,direct_message', async (bot, message) => {
            await bot.reply(message, 'Eugene attended San Jose State University from 2008-2011 and graduated with a B.S. in Justice Studies.');
        });
        controller.hears('App Academy', 'message,direct_message', async (bot, message) => {
            await bot.reply(message, 'Eugene attended App Academy in the spring of 2019');
        });

    controller.hears('Tech Stack', 'message,direct_message', async (bot, message) => {
        await bot.reply(message, {
            text: "Eugene can use the following tools:",
            quick_replies: [
                {
                    title: 'JavaScript',
                    payload: 'JavaScript',
                },
                {
                    title: 'Ruby',
                    payload: 'Ruby',
                },
                {
                    title: 'Python',
                    payload: 'Python',
                },
            ]
        });
    });
        controller.hears('De Anza Community College', 'message,direct_message', async (bot, message) => {
            await bot.reply(message, 'Eugene attended De Anza Community College from 2005-2008.');
        });
        controller.hears('San Jose State University', 'message,direct_message', async (bot, message) => {
            await bot.reply(message, 'Eugene attended San Jose State University from 2008-2011 and graduated with a B.S. in Justice Studies.');
        });
        controller.hears('App Academy', 'message,direct_message', async (bot, message) => {
            await bot.reply(message, 'Eugene attended App Academy in the spring of 2019');
        });

    // controller.on('message,direct_message', async(bot, message) => {
    //     await bot.reply(message, `Echo: ${ message.text }`);
    // });
}
