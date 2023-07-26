function generate()
{
    var quotes= {
    "― Albert Einstein" : '“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it is beauty.”',
    "― Pierce Brown" : '“Man cannot be freed by the same injustice that enslaved it.”',
    "- John Lennon": '"Life is what happens to you while you’re busy making other plans."',
    "- Mark Twain": '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."',
    "- Earl Nightingale": '"We become what we think about."',
    "- Charles Swindoll": '"Life is 10% what happens to me and 90% of how I react to it."',
    "- Buddah": '"The mind is everything. What you think you become."',
    "- Chinese Proverb": '"The best time to plant a tree was 20 years ago. The second best time is now."',
    "- Woody Allen": '"Eighty percent of success is showing up."',
    "- Steve Jobs": '"Your time is limited, so don’t waste it living someone else’s life."',
    "- Vince Lombardi": '"Winning isn’t everything, but wanting to win is."',
    "- Stephen Covey": '"I am not a product of my circumstances. I am a product of my decisions. "',
    "- Christopher Columbus": '"You can never cross the ocean until you have the courage to lose sight of the shore."',
    "- Maya Angelou": '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. "',
    "- Jim Rohn": '"Either you run the day, or the day runs you."',
    "- Henry Ford": '"Whether you think you can or you think you can’t, you’re right."',
    "- Frank Sinatra": '"The best revenge is massive success."',
    "― Madeline Miller, The Song of Achilles" : '“Bury us, and mark our names above. Let us be free.”',
    "―  C.S. Lewis" : '“I was not born to be free---I was born to adore and obey.”',
    "―  Anne Morrow Lindbergh" : '“Him that I love, I wish to be free -- even from me.”'
    }
        var authors = Object.keys(quotes);
        var author = authors[Math.floor(Math.random()* authors.length)];
        var quote = quotes[author];
        document.getElementById("quote").innerHTML=quote;
        document.getElementById("author").innerHTML= author;
}
window.onload = function(){
    generate()
  }