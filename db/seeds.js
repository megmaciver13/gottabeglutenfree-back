const Schema = require('./schema')

const Direction = Schema.Direction
const Post = Schema.Post

let blackBeanBurgerStep1 = new Direction({
  text: `Bread Crumbs: I decided to make my own using leftover cornbread that was in my freezer. Feel free to use any bread you have lying around! I thawed the bread and tore it apart (cornbread crumbles apart well), then spread it into a pan. Bake it for about 10-15 minutes, or until they are just beginning to get golden, at 350 degrees F. Once the bread pieces are baked and dried, crumble them apart into crumbs!`,
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-2.jpg'
})

let blackBeanBurgerStep2 = new Direction({
  text: `Burgers: First, mince the garlic cloves and finely chop the red onion.`,
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-3.jpg'
})

let blackBeanBurgerStep3 = new Direction({
  text: `Drain and rinse the beans, then throw them into a bowl to toss with the chopped onion, minced garlic, cumin, and salt.`,
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-4.jpg'
})

let blackBeanBurgerStep4 = new Direction({
  text: `Use fork to mash the mixture. (I like my bean burgers pureed, so I only coarsely mashed.)`,
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-5.jpg'
})

let blackBeanBurgerStep5 = new Direction({
  text: `Add the corn, salsa, bread crumbs, and egg whites to the bean mixture.`,
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-6.jpg'
})

let blackBeanBurgerStep6 = new Direction({
  text: `Then, mix it up and use your hands to form four burgers. Coat a skillet in oil and heat over medium heat. Cook for about 5 minutes on each side. Flip carefully! These guys are delicate.`,
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-7.jpg'
})

let blackBeanBurgerStep7 = new Direction({
  text: `Avocado sauce: Mash the avocado in a bowl. Mix in the lime juice, yogurt, and salt.`,
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-8.jpg'
})

let blackBeanBurgerStep8 = new Direction(
  {
    text: `Plate the burger, and top with the avocado sauce and any other desired toppings.`,
    imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-black-bean-burgers-10.jpg'
  }
)

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
  directions: [blackBeanBurgerStep1, blackBeanBurgerStep2, blackBeanBurgerStep3, blackBeanBurgerStep4, blackBeanBurgerStep5, blackBeanBurgerStep6, blackBeanBurgerStep7, blackBeanBurgerStep8]
})

let savoryQuinoaWrapStep1 = new Direction({
  text: `First, if you haven’t cooked the quinoa yet, do so now. I made 1 cup of dry quinoa, so I could use the rest for meals throughout the week. Rinse 1 c. dry quinoa, then place in 2 c. water. Bring to a boil. Once boiling, turn the heat low, and place the top on the pan. Let it cook for 15 min. Once the quinoa is cooked, use a fork to fluff it up and separate the grains.`,
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-quinoa-wrap-1.jpg'
})

let savoryQuinoaWrapStep2 = new Direction({
  text: 'Heat the tortilla on a skillet over low heat.',
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-quinoa-wrap-2.jpg'
})

let savoryQuinoaWrapStep3 = new Direction({
  text: 'Let it heat for about 30 seconds on one side, then turn it over and line with cheese. Let cook until cheese is melted.',
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-quinoa-wrap-5.jpg'
})

let savoryQuinoaWrapStep4 = new Direction({
  text: 'While the cheese is melting, chop up the parsley and sun-dried tomatoes.',
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-quinoa-wrap-4.jpg'
})

let savoryQuinoaWrapStep5 = new Direction({
  text: 'Once the cheese on the tortilla has melted, turn off the heat and pile on the sun-dried tomatoes and parsley.',
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-quinoa-wrap-6.jpg'
})

let savoryQuinoaWrapStep6 = new Direction({
  text: 'Line up the avocado slices.',
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-quinoa-wrap-7.jpg'
})

let savoryQuinoaWrapStep7 = new Direction({
  text: `Then, spoon the warm quinoa onto the tortilla, and plop on a handful of greens. Roll it up carefully, as the tortilla is probably a little crispy from the skillet. Between that and the green, the wrap has a nice crunch to it!`,
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-quinoa-wrap-1.jpg'
})

let savoryQuinoaWrapPost = new Post({
  title: 'Savory Quinoa Wrap',
  date: new Date('2014-06-20T16:00:00Z'),
  featuredImage: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-quinoa-wrap-10.jpg',
  introText: `So my latest obsession has been sun-dried tomatoes.

Since I picked up a jar at Trader Joe’s two weeks ago, I’ve been sneaking them into almost all of my food. And you know what I’ve found? They actually work quite well in pretty much all of my meals. I guess that may be due to the fact that my other recent diet staples have been cheese and kale. In case you weren’t aware, sun-dried tomatoes, cheese, and kale really get along well. Beware- this combo is addicting.

So, when I pondered what to eat, it shouldn’t come as a surprise that the answer included all three of these staples.

Plus, I had a perfectly ripe avocado that was sitting on my counter just begging to be consumed.

I opened my pantry to see what else might work in a wrap. I needed some substance, but nothing too overwhelming. I was already pretty covered on the flavor front, and didn’t want to risk overdoing it.

That’s when I found my answer: quinoa.

I love making a batch of quinoa and keeping the extras around for other uses in other meals. One of my favorite ways to use leftover quinoa? To make a fried rice-inspired stir-fry, tossing the quinoa with soy sauce, toasted sesame oil, and veggies.

But let’s not get ahead of ourselves. Let’s focus on this wrap. Because it is simply deeee-lish.

If you were looking for a jazzy new lunch idea, this is it! In fact, maybe you should just make a whole bunch of these right now and keep ’em in the fridge. Then, on your way out the door in the morning, you can just throw one in your bag for lunch. Voila! Hassle-free morning.

You’re welcome.`,
  yieldQuantity: '1 wrap',
  ingredients: ['1 8-inch gf tortilla (I use Food for Life brand)', '4 slices fresh mozzarella cheese', '1 handful fresh parsley, chopped', '1 heaping Tbsp. chopped sun-dried tomatoes', '1/4 avocado, sliced', '1/4 c. cooked quinoa', '1 handful baby kale, or other greens', 'any other adornment you may wish to add (e.g. salt, pepper, crushed red pepper)'],
  finalImage: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-quinoa-wrap-11.jpg',
  finalText: `Enjoy!`,
  directions: [savoryQuinoaWrapStep1, savoryQuinoaWrapStep2, savoryQuinoaWrapStep3, savoryQuinoaWrapStep4, savoryQuinoaWrapStep5, savoryQuinoaWrapStep6, savoryQuinoaWrapStep7]
})

const fishTacoStep1 = new Direction({
  text: 'Finely chop the cabbage into thin strands.',
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-fish-tacos-3.jpg'
})

const fishTacoStep2 = new Direction({
  text: 'Mix the lime juice, honey, onion, and jalapeño in a small bowl. In a large bowl, mix the contents of the small bowl into the cabbage. Stir the cilantro and salt into the cabbage. Let sit for at least 30 minutes.',
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-fish-tacos-4.jpg'
})

const fishTacoStep3 = new Direction({
  text: 'For the quick-pickled onions: Slice the onion and jalapeno.',
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-fish-tacos-5.jpg'
})

const fishTacoStep4 = new Direction({
  text: 'Add the red wine vinegar, sugar, salt, and water to a medium saucepan. Bring to a boil. Put the onion and jalapeño in, and reduce to a simmer. Cook for 5 minutes, then drain. Onions are ready!',
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-fish-tacos-6.jpg'
})

const fishTacoStep5 = new Direction({
  text: 'For the sauce: Add all ingredients to a food processor.',
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-fish-tacos-7.jpg'
})

const fishTacoStep6 = new Direction({
  text: 'Blend ingredients. The sauce is ready!',
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-fish-tacos-8.jpg'
})

const fishTacoStep7 = new Direction({
  text: `Pour oil into a heavy pan–enough to have at least one inch in the bottom of pan. (Use a heavy, fairly deep pan–like a Dutch oven or cast iron skillet. Heat oil on high heat (350 degrees if you have a thermometer).

Cut the fish into pieces about one by one inch pieces.`,
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-fish-tacos-9.jpg'
})

const fishTacoStep8 = new Direction({
  text: 'In a medium mixing bowl, combine flour, salt, sugar, onion powder, and baking powder. Pour beer in, and whisk until blended.Dip fish pieces into batter to coat completely.',
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-fish-tacos-11.jpg'
})

const fishTacoStep9 = new Direction({
  text: 'Carefully lower into oil, and fry for 3-5 minutes.',
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-fish-tacos-13.jpg'
})

const fishTacoStep10 = new Direction({
  text: 'Remove using tongs, fork, or basket strainer tool. Place on a plate lined with several sheets of paper towel. Let cool at least 3 minutes.',
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-fish-tacos-14.jpg'
})

const fishTacoStep11 = new Direction({
  text: `Now, it’s time to assemble the tacos!!!! The moment you’ve been waiting for! Heat the tortillas over a gas burner on low heat for 30 seconds on each side. Then pile on the fish, slaw, sauce, and onions. Your tacos are ready!`,
  imageUrl: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-fish-tacos-16.jpg'
})

const fishTacoPost = new Post({
  title: 'Fish Tacos',
  date: new Date('2015-03-23T16:00:00Z'),
  featuredImage: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-fish-tacos-17.jpg',
  introText: `Tom is usually quite wishy washy about food decisions.

“Whatever you think.”

“Chef’s mercy.”

Or simply “I don’t know.”

Last week, I approached him and told him he was in charge of deciding what I made next for the blog. Realizing he didn’t have a choice, but to actually make a decision about food in the kitchen, he hesitated for only a moment before offering up, “fish tacos?” It seemed very specific for someone who claims to have no inspiration when it comes to the culinary arts. But it was the perfect suggestion. Just “Meg” enough (tacos…hello!!), and just out of my comfort zone enough (I never make fish at home).

I went to the interwebs for lots of inspiration. I knew a slaw would be key for some zest and crunch. And I knew I wanted some sort of yogurt sauce. Because sauce. YUM.

It was rather an adventure.

And that’s the wonderful thing about cooking escapades like tacos and slaws and sauces. There is so much room for creativity. Sometimes precision is fun. That’s when you bake a soufflé. Sometimes, crazy messiness is fun. That’s when you make tacos 🙂`,
  additionalImage: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-fish-tacos-2.jpg',
  yieldQuantity: '12 small tacos',
  ingredients: ['Ingredients for Slaw:', '1/2 head of cabbage', '2 tsp. lime juice', '2 tsp. honey', '2 Tbsp. red onion', '3 tsp. minced jalapeño', '2 tsp. chopped cilantro', '1/4 tsp. salt', 'Ingredients for Quick-Pickled Onions:', '1/4 c. red wine vinegar', '2 Tbsp. sugar', '1 tsp. salt', '1 1/2 c. water', '1/2 red onion, sliced', '1 jalapeño, sliced in half and seeded', 'Ingredients for Sauce:', '1 c. plain Greek yogurt', '1/2 c. packed cilantro leaves', '3 cloves garlic', `1 jalapeño`, 'juice from one lime', '2-4 Tbsp. olive oil', '12 corn tortillas', '1 lb. cod', '1 c. gf flour', '2 tsp. salt', '1 tsp. sugar', '1/8 tsp. onion powder', '1 tsp. baking powder', '1 c. gf beer'],
  finalImage: 'https://s3.us-east-2.amazonaws.com/gottabeglutenfree/gbgf-fish-tacos-18.jpg',
  finalText: 'Enjoy! And while you’re cooking with it, may as well crack a few brewskis.',
  directions: [fishTacoStep1, fishTacoStep2, fishTacoStep3, fishTacoStep4, fishTacoStep5, fishTacoStep6, fishTacoStep7, fishTacoStep8, fishTacoStep9, fishTacoStep10, fishTacoStep11]
})

let posts = [blackBeanBurgerPost, savoryQuinoaWrapPost, fishTacoPost]

Post.remove({})
  .then(() => {
    console.log('Old post data removed successfully.')
    return Post.collection.insert(posts)
  })
  .then(() => {
    process.exit()
  })
  .catch(err => console.log(err))
