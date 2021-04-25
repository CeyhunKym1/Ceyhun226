const Discord = require('discord.js');
const bot = new Discord.Client();
const { MessageEmbed } = require("discord.js")
const PREFIX = '!';
const TOKEN = "ODM1OTY2NzI0NTc4MDgyODI2.YIXIrg.LH8FIGKy4jMb9azMEpobPMgM_s8"

const chance = '801465438605148250'

const Test1 = '780778619193655326';
const Test2 = '780778644045692959';
const Test3 = '780778675968278538';

var version = '1.0.2';

bot.on('ready', () => {
    console.log('Der Bot ist nun Einsatzbereit!')

    let statuses = [
        `!help`,
        `H`,
        `A`,
        `L`,
        `L`,
        `O`
    ]

    setInterval(function(){
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: 'PLAYING'}).catch(console.error);
    }, 3000)
})

bot.on('message', message => {
    let parts = message.content.split(" ");

        if (parts[0] == '!help') {
            const exampleEmbed = {
                color: 0x0099ff,
                title: '**Unser Discord**',
                url: 'https://discord.gg/rGkZnw9EAV',
                author: {
                    name: 'Some name',
                    icon_url: 'https://cdn.discordapp.com/avatars/833585189288542208/5868a2ac8f791d9caf9bb516ae48a44c.webp',
                    url: 'https://discord.gg/rGkZnw9EAV',
                },
                description: 'Some description here',
                thumbnail: {
                    url: 'https://cdn.discordapp.com/avatars/833585189288542208/5868a2ac8f791d9caf9bb516ae48a44c.webp',
                },
                fields: [
                    {
                        name: 'Regular field title',
                        value: 'Some value here',
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: false,
                    },
                    {
                        name: 'Inline field title',
                        value: 'Some value here',
                        inline: true,
                    },
                    {
                        name: 'Inline field title',
                        value: 'Some value here',
                        inline: true,
                    },
                    {
                        name: 'Inline field title',
                        value: 'Some value here',
                        inline: true,
                    },
                ],
                image: {
                    url: 'https://cdn.discordapp.com/avatars/833585189288542208/5868a2ac8f791d9caf9bb516ae48a44c.webp',
                },
                timestamp: new Date(),
                footer: {
                    text: 'Some footer text here',
                    icon_url: 'https://cdn.discordapp.com/avatars/833585189288542208/5868a2ac8f791d9caf9bb516ae48a44c.webp',
                },
            };
            
            message.channel.send({ embed: exampleEmbed });
        }
        else if (parts[0] == '!server') {
            const server = new Discord.MessageEmbed()
            .setAuthor("Welcome!", "https://cdn.discordapp.com/avatars/833585189288542208/5868a2ac8f791d9caf9bb516ae48a44c.webp")
            .setTitle(`This server's name is: ${message.guild.name}`)
            .setColor("RED")
            .setFooter("370z#0018")
            message.delete();
            message.author.send(server)
        }
        else if (parts[0] == '!ping') {
            message.channel.send('Pong!')
        }
        else if (parts[0] == '!Ping') {
            message.channel.send('Pong!')
        }
        else if (parts[0] == '!clear') {
            if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Dir fehlt die benötigte Berechtigung! (MANAGE_MESSAGES)')
            if(!parts[1]) return message.channel.send('Fehler, bitte zweites Argument angeben!')
            message.channel.bulkDelete(parts[1])
        }
        else if (parts[0] == '!ownerinfo') {
            const ownerinfo = new Discord.MessageEmbed()
            .setAuthor("Welcome!", "https://cdn.discordapp.com/avatars/833585189288542208/5868a2ac8f791d9caf9bb516ae48a44c.webp")
            .setTitle(`Der Owner/Ersteller dieses Servers ist 370z#0018`)
            .setColor("RED")
            .setFooter("370z#0018")
            message.delete();
            message.author.send(ownerinfo)
        }
        else if (parts[0] == '!avatar') {
            const avatar = new Discord.MessageEmbed()
            .setTitle(`Your Avatar`)
            .setImage("https://cdn.discordapp.com/avatars/833585189288542208/5868a2ac8f791d9caf9bb516ae48a44c.webp")
            .setColor("RED")
            .setFooter(`370z#0018`)
            message.delete();
            message.author.send(avatar)
        }
        else if (parts[0] == '!rolleninfo') {
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Dir fehlt folgende Berechtigung: MANAGE_ROLES !')
            console.log(message.guild.roles)
            const rolleninfo = new Discord.MessageEmbed()
            .setAuthor("Welcome!", "https://cdn.discordapp.com/avatars/833585189288542208/5868a2ac8f791d9caf9bb516ae48a44c.webp")
            .setTitle("Die Rolleninfo wurde an den Log geschickt!")
            .setColor("RED")
            .setFooter("370z#0018")

            message.delete();
            message.author.send(rolleninfo)
        }
        else if (message.content === '<@!835966724578082826>') {

            const baum = new Discord.MessageEmbed()
            .setTitle('Man hat mich gerufen ...')
            .setColor('#98c9c3')
            .addField('**Brauchst du Hilfe?**', 'Dann schreibe das Team, oder den Owner an!')
            .addField('Willst du dem Owner eine DM schreiben?', 'Hier seine DC#ID: 370z#0018')

            message.delete();
            message.author.send(baum)
        }
        else if (parts[0] == '!userinfo') {
            let userr = message.mentions.users.first() || message.author;
        
                let userinfo = {}
        
                userinfo.name = userr.username;
                userinfo.discrim = userr.discriminator;
                userinfo.id = userr.id;
                userinfo.status = userr.presence.status;
                userinfo.bot = userr.bot;
                userinfo.create = userr.createdAt;
        
                const userembed = new Discord.MessageEmbed()
                .setAuthor(userr.tag)
                .setColor("RANDOM")
                .addField("Nutzername:", userinfo.name, true)
                .addField("#ID:", userinfo.discrim, true)
                .addField("User ID:", userinfo.id, false)
                .addField("Status:", userinfo.status, true)
                .addField("Bot:", userinfo.bot, true)
                .addField('Sorry,', 'dass "Status" nicht geht xd ...')
                .setFooter("370z#0018")
        
                return message.channel.send(userembed)
                
        }
        else if (parts[0] == '!say') {
            if (!parts[1]) return message.channel.send('Du musst angeben, was der Text sein soll, den der Bot sagt!')
            var text = message.content.split(" ").slice(1).join(" ");
            message.delete();
            message.channel.send(text)
        }
        else if (parts[0] == '!sayemb') {
            if(!parts[1]) return message.channel.send('You have to specify what the text of your embed should contain!')
            var text = message.content.split(" ").slice(1).join(" ");
            message.delete();

            const sayembed = new Discord.MessageEmbed()
            .setColor('WHITE')
            .addField(message.member.displayName + ' cries:', text, true)
            .setFooter('This is an exclamation from ' + message.author.username + '#' + message.author.discriminator + ' !')

            message.channel.send(sayembed)
        }
        else if (parts[0] == '!dm') {
            if (!message.mentions.users.first()) {
                if (!parts[1]) return message.channel.send('Du musst angeben, was du dir selbst schreiben lassen möchtest!')
                message.delete()
                var text = message.content.split(" ").slice(1).join(" ");

                message.author.send(text)
            }
            else if (message.mentions.users.first()) {
                if (!parts[1]) return message.channel.send('Du musst angeben, wem du etwas schreiben lassen willst!')
                if (!parts[2]) return message.channel.send('Du musst angeben, was du deinem Ziel schicken lassen willst!')

                message.delete()
                var text = message.content.split(" ").slice(2).join(" ");

                message.mentions.users.first().send(text)
            }
        }
        else if (parts[0] == '!kick') {

            if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Dir fehlt folgende Berechtigung: KICK_MEMBERS')

            let kicked = message.mentions.members.first();
            if (!kicked) return message.channel.send('Der angegebene User ist nicht auf diesem Server!')

            message.guild.member(kicked).kick();

            const kickemb = new Discord.MessageEmbed()
            .setColor('RED')
            .addField(`Der User`, `${message.mentions.members.first()} wurde erfolgreich gekickt!`)
            .setFooter(`Der Kick wurde von ${message.author.username}#${message.author.discriminator} ausgeführt!`)

            message.channel.send(kickemb)
        }
        else if (parts[0] == '!ban') {

            if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Dir fehlt folgende Berechtigung: BAN_MEMBERS')

            let banned = message.mentions.members.first();
            if (!banned) return message.channel.send('Der angegebene User ist nicht auf diesem Server!')

            message.guild.member(banned).ban();

            const banemb = new Discord.MessageEmbed()
            .setColor('RED')
            .addField(`Der User`, `${message.mentions.members.first()} wurde erfolgreich gebannt!`)
            .setFooter(`Der Ban wurde von ${message.author.username}#${message.author.discriminator} ausgeführt!`)

            message.channel.send(banemb)
        }
    

})

bot.on('message', (message) => {
    const parts = message.content.split(" ");

    if (parts[0] == '!role') {
        if (!parts[1]) return message.channel.send('Es fehlt das zweite Argument! [add/remove]')

        if (parts[1] == 'add') {
            if (!parts[2]) return message.channel.send('Dir fehlt das dritte Argument! [testrolle1/testrolle2/testrolle3]')

            if (parts[2] == 'testrolle1') {
                message.member.roles.add(Test1)
                message.channel.send('Du hast nun die Testrolle 1')
            }
            else if (parts[2] == 'testrolle2') {
                message.member.roles.add(Test2)
                message.channel.send('Du hast nun die Testrolle 2')
            }
            else if (parts[2] == 'testrolle3') {
                message.member.roles.add(Test3)
                message.channel.send('Du hast nun die Testrolle 3')
            }
        }
        else if (parts[1] == 'remove') {
            if (!parts[2]) return message.channel.send('Dir fehlt das dritte Argument! [testrolle1/testrolle2/testrolle3]')

            if (parts[2] == 'testrolle1') {
                message.member.roles.remove(Test1)
                message.channel.send('Du hast nun nicht mehr die Testrolle 1')
            }
            else if (parts[2] == 'testrolle2') {
                message.member.roles.remove(Test2)
                message.channel.send('Du hast nun nicht mehr die Testrolle 2')
            }
            else if (parts[2] == 'testrolle3') {
                message.member.roles.remove(Test3)
                message.channel.send('Du hast nun nicht mehr die Testrolle 3')
            }
        }
    }

})

bot.on('message', async message => {
    let link = ["discord.gg", "discord.com/invite", "discordapp.com/invite", "https://", "http://"]

    if (link.some(word => message.content.toLowerCase().includes(word))) {
        if (message.member.roles.cache.find(r => r.id == chance)) {
            message.member.roles.remove(chance)
            return
        }
        if (message.channel.id == 'DEINE CHANNEL ID') return
        await message.delete()
        return message.channel.send('Du darfst hier keine Links reinschicken!')
    }
})

bot.on("guildMemberAdd",member => {
    console.log(member.guild.id)
    if(member.guild.id === "834122603157389333"){
        const welcomeembed = new MessageEmbed()
        .setAuthor("Welcome!", "https://cdn.discordapp.com/avatars/833585189288542208/5868a2ac8f791d9caf9bb516ae48a44c.webp")
        .setThumbnail(member.guild.iconURL({dynamic: true, size: 512}))
        .setTitle(`Welcome **${member.guild.username}** to **${member.guild.name}**`)
        .setDescription("Join us chatting in <#834890159047704617>")
        .setImage(member.guild.iconURL({dynamic: true, size: 512}))
        .setFooter(member.guild.name, "https://cdn.discordapp.com/avatars/833585189288542208/5868a2ac8f791d9caf9bb516ae48a44c.webp")
        .setTimestamp();
            bot.guilds.cache.get("834122603157389333").channels.cache.get("834890159047704617").send(welcomeembed);
    }
})

bot.on('message', async message => {
    
    if(message.content.startsWith(`${prefix}avatar`)){
        const User = message.mentions.users.first() || message.author;
        const embed = new Discord.MessageEmbed()
        .setTitle(`Avatar for ${User.username}`)
        .setImage(User.displayAvatarURL())
        .setColor("RED")
        message.channel.send(embed);
    }
});

bot.login(process.env.token)