// Initializing an array of 11 tweets with username, date created, and age fields as JavaScript Objects
var tweets = [
    {
        tweet: `Thanks is short for Tom Hanks`,
        username: `@Co_Mill`,
        createdAt: `03-09-2021`,
        age: 26
    },

    {
        tweet: `I hope this email finds you lost at sea`,
        username: `@rudeunicorns`,
        createdAt: `02-21-2021`,
        age: 32
    },

    {
        tweet: `People watching is my favourite hobby`,
        username: `@KeithLeakJr`,
        createdAt: `10-28-2019`,
        age: 27
    },

    {
        tweet: `Yogurt expires exactly two days before you decide you want it. It's science.`,
        username: `@supershayne`,
        createdAt: `05-01-2020`,
        age: 29
    },

    {
        tweet: `I was born at a very young age`,
        username: `@kimmydoesstuff`,
        createdAt: `12-17-2020`,
        age: 27
    },

    {
        tweet: `I hope the all pigeons have a great day today`,
        username: `@Will_13`,
        createdAt: `01-14-2019`,
        age: 19
    },

    {
        tweet: `I just read "22nd" as "secondly second" in my head just now`,
        username: `@ianhecox`,
        createdAt: `08-03-2020`,
        age: 33
    },

    {
        tweet: `There isn't a single virgo who believes in astrology`,
        username: `@sally_t88`,
        createdAt: `02-08-2017`,
        age: 20
    },

    {
        tweet: `Who called it a subtweet instead of a tea sis statement`,
        username: `@olivasui`,
        createdAt: `09-05-2016`,
        age: 24
    },

    {
        tweet: `Why is it called creepypasta and not fettuccino afraido`,
        username: `@blaine_capatch`,
        createdAt: `02-03-2021`,
        age: 29
    },

    {
        tweet: `Every movie trilogy is a Christmas movie`,
        username: `@garrett_87`,
        createdAt: `12-25-2020`,
        age: 18
    }
];

// Storing the length of the array into a new variable
var tweetsLength = tweets.length;

// Writing a for loop conditional that will print each tweet, username, and when the tweet was created one by one to the console
for (i = 0; i < tweetsLength; i++) {
    console.log(tweets[i].tweet);
    console.log(tweets[i].username);
    console.log(tweets[i].createdAt);
}