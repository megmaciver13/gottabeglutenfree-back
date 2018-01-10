const Schema = require('./schema')

const DirectionList = Schema.DirectionList
const Post = Schema.Post

let blackBeanBurgerDirections = new DirectionList({
  stepOne: {
    text: String,
    imageUrl: String
  },
  stepTwo: {
    text: String,
    imageUrl: String
  },
  stepThree: {
    text: String,
    imageUrl: String
  },
  stepFour: {
    text: String,
    imageUrl: String
  },
  stepFive: {
    text: String,
    imageUrl: String
  },
  stepSix: {
    text: String,
    imageUrl: String
  },
  stepSeven: {
    text: String,
    imageUrl: String
  },
  stepEight: {
    text: String,
    imageUrl: String
  },
  stepNine: {
    text: String,
    imageUrl: String
  },
  stepTen: {
    text: String,
    imageUrl: String
  },
  stepEleven: {
    text: String,
    imageUrl: String
  },
  stepTwelve: {
    text: String,
    imageUrl: String
  }
})

let blackBeanBurgerPost = new Post({
  title: 'Black Bean Burgers',
  date: new Date('2014-05-15T16:00:00Z'),
  featuredImage: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-10.jpg',
  introText: `Hola, gang!

My mom always referred to my siblings and I as gang. Example: “Come on, gang! Let’s go!” I always felt weird about this. In my head, a gang was something you chose to join. On the contrary, I was forced born into my family. I also felt weird about it because I would see gangs in the newspaper for various violent crimes. My siblings and I were not involved in local crimes (to my knowledge). You can see how this pet name of “gang” would confuse a child. You can’t? Humor me.

Despite her confusing terminology, my mom did a prettyyyyy awesome job of raising us. (THANKS MOOOOM.) Which is why I called her on Sunday (known to Hallmark as Mother’s Day). Which is why she told me about her brunch at Prasino. Which is why I was craving a black bean burger with avocado sauce.

Prasino is one of those places that I usually put on my list of “restaurants I must visit” whenever I make a trip home. And I really can’t remember a time that I ordered anything other than their black bean burger. Its just. so. good. And gluten free! It is served with a slice of cheese melted on top and an avocado sauce that has a real kick!

And it was such a nice day that I decided to make a picnic of it. My friends Sarah and Alice came over to eat with me in the courtyard of my apartment, and it was quite lovely. Plus, they brought a deeeelish salad with lotsa fruit and goat cheese to go on top. Just my type!`,
  additionalImage: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-1.jpg',
  yieldQuantity: '4 burgers',
  ingredients: ['1 15-oz. can black beans', '1/4 red onion', '2 garlic cloves', '3/4 tsp. cumin', '1/4 tsp. salt', '3/4 c. corn (I thawed frozen corn)', '1/4 c. salsa (for me, Tostitos Restaurant Style all day errrry day)', '3/4 c. gf bread crumbs (you can use any bread lying around, see below)', '1 egg white', 'avocado sauce:', '1/2 avocado', '1/4 c. plain yogurt', '1/2 lime', 'salt'],
  finalImage: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-12.jpg',
  directions: [blackBeanBurgerDirections]
})
