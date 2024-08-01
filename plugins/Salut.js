module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "ʬɸʬ Fouini The King ʬɸʬ",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("Salut Toi , moi c'est Lord Fouini et mon maître c'est Brayal Parker(Fouini The King), t'as besoin de quelque chose ? ✨😀");
}
};
