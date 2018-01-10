const Schema = require('./schema')

const DirectionList = Schema.DirectionList
const Post = Schema.Post

let blackBeanBurgerDirections = new DirectionList({
  stepOne: {
    text: `Bread Crumbs: I decided to make my own using leftover cornbread that was in my freezer. Feel free to use any bread you have lying around! I thawed the bread and tore it apart (cornbread crumbles apart well), then spread it into a pan. Bake it for about 10-15 minutes, or until they are just beginning to get golden, at 350 degrees F. Once the bread pieces are baked and dried, crumble them apart into crumbs!`,
    imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-2.jpg'
  },
  stepTwo: {
    text: `Burgers: First, mince the garlic cloves and finely chop the red onion.`,
    imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-3.jpg'
  },
  stepThree: {
    text: `Drain and rinse the beans, then throw them into a bowl to toss with the chopped onion, minced garlic, cumin, and salt.`,
    imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-4.jpg'
  },
  stepFour: {
    text: `Use fork to mash the mixture. (I like my bean burgers pureed, so I only coarsely mashed.)`,
    imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-5.jpg'
  },
  stepFive: {
    text: `Add the corn, salsa, bread crumbs, and egg whites to the bean mixture.`,
    imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-6.jpg'
  },
  stepSix: {
    text: `Then, mix it up and use your hands to form four burgers. Coat a skillet in oil and heat over medium heat. Cook for about 5 minutes on each side. Flip carefully! These guys are delicate.`,
    imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-7.jpg'
  },
  stepSeven: {
    text: `Avocado sauce: Mash the avocado in a bowl. Mix in the lime juice, yogurt, and salt.`,
    imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-8.jpg'
  },
  stepEight: {
    text: `Plate the burger, and top with the avocado sauce and any other desired toppings.`,
    imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-10.jpg'
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
  ingredients: ['1 15-oz. can black beans', '1/4 red onion', '2 garlic cloves', '3/4 tsp. cumin', '1/4 tsp. salt', '3/4 c. corn (I thawed frozen corn)', '1/4 c. salsa (for me, Tostitos Restaurant Style all day errrry day)', '3/4 c. gf bread crumbs (you can use any bread lying around, see below)', '1 egg white', 'avocado sauce:', '1/2 avocado', '1/4 c. plain yogurt', '1/2 lime', 'salt', 'desired burger toppings (e.g. red onion, cilantro)'],
  finalImage: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-12.jpg',
  finalText: `And off to the courtyard we went for our lovely meal! I didn’t have any buns so we ate the bean burgers in a tortilla. Thus, it was somewhat of a black bean burger burrito. How’s that for alliteration?`,
  directions: [blackBeanBurgerDirections]
})

let posts = [blackBeanBurgerPost]

Post.remove({})
  .then(() => {
    console.log('Old post data removed successfully.')
    return Post.collection.insert(posts)
  })
  .then(() => {
    process.exit()
  })
  .catch(err => console.log(err))
