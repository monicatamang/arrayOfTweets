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
        age: 17
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
        age: 14
    },

    {
        tweet: `I just read "22nd" as "secondly second" in my head just now`,
        username: `@ianhecox`,
        createdAt: `08-03-2020`,
        age: 20
    },

    {
        tweet: `There isn't a single virgo who believes in astrology`,
        username: `@sally_t88`,
        createdAt: `02-08-2017`,
        age: 14
    },

    {
        tweet: `Who called it a subtweet instead of a tea sis statement`,
        username: `@olivasui`,
        createdAt: `09-05-2016`,
        age: 13
    },

    {
        tweet: `Why is it called creepypasta and not fettuccino afraido`,
        username: `@blaine_capatch`,
        createdAt: `02-03-2021`,
        age: 18
    },

    {
        tweet: `Every movie trilogy is a Christmas movie`,
        username: `@garrett_87`,
        createdAt: `12-25-2020`,
        age: 15
    }
];

// Creating a function that checks whether the user is 18 or older and returning the value as a boolean to the caller
function checkAge(user) {
    if (user.age >= 18) {
        return true;
    } else if (user.age < 18) {
        return false;
    } else {
        console.log("User input is invalid");
        return undefined;
    }
}

// Creating a function that checks whether the user is older than 18 and returning the value as a boolean to the caller
function overAge(olderUsers) {
    if (olderUsers.age > 18) {
        return true;
    }
}

// Calling the function checkAge and storing tweets who's user is 18 or older as an array into a new variable
var userAge = tweets.filter(checkAge);

// Calling the function overAge, filtering tweets who's user is older than 18 from the userAge array, creating a new variable that stores a new array with only tweets who's user is older than 18 and console logging the new array to the console
var adultUsers = userAge.filter(overAge);
console.log(adultUsers);