const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI, appURI } = require('../config/environment');

const Cheese = require('../models/cheese');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => Cheese.create([{
        name: 'Gorgonzola',
        origin: 'Italy',
        image: `${appURI}/images/gorgonzola.jpeg`,
        tastingNotes: 'Gorgonzola is traditionally a rich creamy cheese, but the blue-green ripples add a sharp spicy flavor that provides an excellent contrast to its richness. The taste ranges from mild to sharp, depending on age.'
      },{
        name: 'Caerphilly',
        origin: 'Wales',
        image: `${appURI}/images/caerphilly.jpeg`,
        tastingNotes: 'This young cheese has an ivory white rind with a pale colored paste and semi-firm texture. It\'s a moist, crumbly cheese, and its flavor is usually described as salty buttermilk, slightly sour, but buttery.'
      },{
        name: 'Roquefort',
        origin: 'France',
        image: `${appURI}/images/roquefort.jpeg`,
        tastingNotes: 'Roquefort has a tingly pungent taste, a distinct bouquet, and a flavor that combines the sweet burnt-caramel taste of sheep\'s milk with the sharp, metallic tang of the blue mold.'
      }, {
        name: 'Comté',
        origin: 'France',
        image: `${appURI}/images/comte.jpeg`,
        tastingNotes: 'Salty, mild, and lightly fruity with hazelnut and nutmeg flavors.'
      }, {
        name: 'Stilton',
        origin: 'England',
        image: `${appURI}/images/stilton.jpeg`,
        tastingNotes: 'Milder than Roquefort or Gorgonzola, Stilton has a rich and mellow flavor with a pungent aftertaste. The finest Stilton is creamy with a subtle, yeasty sweetness and a salty, nutty finish.'
      }, {
        name: 'Smoked Gouda',
        origin: 'Netherlands',
        image: `${appURI}/images/smoked-gouda.jpeg`,
        tastingNotes: 'Smoked Gouda is a bit nuttier tasting than the regular Gouda. Containing 45% butterfat, it’s buttery, creamy and smooth with sweet and salty notes.'
      }, {
        name: 'Camembert',
        origin: 'France',
        image: `${appURI}/images/camembert.jpeg`,
        tastingNotes: 'The flavor of Camembert is definitely the main reason for its worldwide popularity. Open the lid on your Camembert box and you will immediately notice an aroma of mushrooms with a subtle braised cabbage undertone.'
      }, {
        name: 'Drunken Goat',
        origin: 'Spain',
        image: `${appURI}/images/drunken-goat.jpeg`,
        tastingNotes: 'The flavor begins mild and oh-so-creamy, but finishes with a wonderful tangy sweetness and a fruity, luscious, grapey aroma.'
      }, {
        name: 'Halloumi',
        origin: 'Cyprus',
        image: `${appURI}/images/halloumi.jpeg`,
        tastingNotes: 'Halloumi has a very appealing flavor that\'s unlike any other cheese: mellow, but not in the least boring, mildly feta-like, notably tangy, and never too strong.'
      }, {
        name: 'Edam',
        origin: 'Netherlands',
        image: `${appURI}/images/edam.jpeg`,
        tastingNotes: 'Aged Edam is mild, slightly salty and nutty.'
      }, {
        name: 'Port Salut',
        origin: 'France',
        image: `${appURI}/images/port-salut.jpeg`,
        tastingNotes: 'Port Salut is a semi-soft natural cheese that is most recognized by its orange rind. Don’t be put off by the smell—which can be strong because it’s a washed rind cheese. It will still have a relatively mild flavor—savory and slightly sweet. The smell will increase the longer the cheese is kept but, again, the smell doesn’t affect its flavor.'
      }, {
        name: 'Wensleydale',
        origin: 'England',
        image: `${appURI}/images/wensleydale.jpeg`,
        tastingNotes: 'Descriptions of White Wensleydale are somewhat paradoxical. It is firm but not dry or hard; creamy with a surface that is crumbly; slightly sweet but also tart in flavor.'
      }, {
        name: 'Point Reyes Original Blue',
        origin: 'USA',
        image: `${appURI}/images/point-reyes-original-blue.jpeg`,
        tastingNotes: 'Even if you’re not a fan of blue cheeses, Point Reyes Original Blue’s sweet, buttery and fresh milk flavor will sure win you over.'
      }, {
        name: 'Mahón',
        origin: 'Spain',
        image: `${appURI}/images/mahon.jpeg`,
        tastingNotes: 'A unique cheese with a sweet and fruity aroma and a rich, bold flavor, Mahón is not for those who prefer bland cheeses.'
      }, {
        name: 'Vella Dry Monterey Jack',
        origin: 'USA',
        image: `${appURI}/images/vella-dry-monterey-jack.jpeg`,
        tastingNotes: 'Grated onto salads, soups or pastas, Dry Jack is a winner! It\'s wonderful eaten on its own for snacks or sandwiches and it is delicious after dinner with fresh fruit and a handful of toasted walnuts.'
      }, {
        name: 'Emmentaler Classic',
        origin: 'Switzerland',
        image: `${appURI}/images/emmentaler-classic.jpeg`,
        tastingNotes: 'Authentic Swiss cheese is never harsh or bitter, but should present a degree of acidity on the finish.'
      }, {
        name: 'Roaring 40s Blue',
        origin: 'Australia',
        image: `${appURI}/images/roaring-40s-blue.jpeg`,
        tastingNotes: 'Allow the cheese to fully come to room temperature and enjoy its creamy texture with a fresh baguette, red grapes, figs and/or walnuts.'
      }, {
        name: 'Mirabo Walnut Brie',
        origin: 'Germay',
        image: `${appURI}/images/mirabo-walnut-brie.jpeg`,
        tastingNotes: 'Made in the fertile land of Bavaria, this brie style cheese with walnuts is delicate and ripened to a soft consistency. Its unique shape and presentation really set it apart on a cheese board, and its delicate flavor is sure to please.'
      }, {
        name: 'Jarlsberg',
        origin: 'Norway',
        image: `${appURI}/images/jarlsberg.jpeg`,
        tastingNotes: 'A mild cheese, reminiscent of Swiss, Jarlsberg has large irregular holes and a distinct nutty flavor. Its semi-firm yellow interior has a texture that is buttery rich with a mild and slightly sweet flavor.'
      }, {
        name: 'Pecorino Toscano',
        origin: 'Italy',
        image: `${appURI}/images/pecorino-toscano.jpeg`,
        tastingNotes: 'Although it\'s usually eaten as a table cheese, try it shaved on top of fresh beans, summer salads, or lightly sautéed greens. Use it instead of Parmigiano on your next bowl of pasta. Its flavor is dense and nutty with a wonderful rustic finish.'
      }, {
        name: 'Lancashire',
        origin: 'England',
        image: `${appURI}/images/lancashire.jpeg`,
        tastingNotes: 'Lancashire\'s combination of a delicate texture and rich, creamy flavor places it in a distinct category of its own. Lancashire, like most British cheeses, is the perfect complement to a good beer or ale.'
      }, {
        name: 'Double Gloucester',
        origin: 'England',
        image: `${appURI}/images/double-gloucester.jpeg`,
        tastingNotes: 'This cheese is firm, but with a subtle, closed texture. Note the full, imposing flavor with notes of nuttiness, citrus and hints of onion.'
      }, {
        name: 'Feta',
        origin: 'Greece',
        image: `${appURI}/images/feta.jpeg`,
        tastingNotes: 'Greece\'s most famous traditional cheese, feta is an important part of the Greek diet and is used daily in salads, pastries, and a simple (and simply delicious) fried-cheese appetizer called "saganaki". The fact that it\'s made primarily from pure ewe\'s milk (often with some goat\'s milk) and ripened and stored in brine gives feta a salty, milky, slightly acidic taste.'
      }, {
        name: 'Danish Havarti',
        origin: 'Denmark',
        image: `${appURI}/images/denmark.jpeg`,
        tastingNotes: 'Havarti has a mild flavor similar to a Monterey Jack. Slightly acidic, the taste is buttery and ranges from somewhat sweet to very sweet.'
      }, {
        name: 'Bourdin Chèvre',
        origin: 'France',
        image: `${appURI}/images/bourdin-chevre.jpeg`,
        tastingNotes: 'This style of fresh goat\'s cheese is a staple in French markets, and for very good reason. It has a soft and moist texture and a gentle but creamy flavor.'
      }, {
        name: 'Salemville Armish Blue',
        origin: 'USA',
        image: `${appURI}/images/salemville-armish-blue.jpeg`,
        tastingNotes: 'This cheese has a rich, earthy flavor, well balanced and flavorful. Crumble on salad or pasta tossed with garlic and olive oil, stir into hot mashed potatoes or transform a vinaigrette into delicious blue cheese salad dressing by adding Amish Blue to it.'
      }, {
        name: 'Beemster Classic',
        origin: 'Netherlands',
        image: `${appURI}/images/beemster-classic.jpeg`,
        tastingNotes: 'This cheese looks and feels similar to parmesan but it is more closely related to gouda in taste and texture. The first thing you will notice when tasting the Beemster Classic is the smooth, creamy texture followed by a sharp, salty flavor due to its extensive aging.'
      }, {
        name: 'Manchego',
        origin: 'Netherlands',
        image: `${appURI}/images/Manchego.jpeg`,
        tastingNotes: 'Manchego has a distinctive flavor and an equally distinctive look. It can be recognized by a unique zigzag or cross hatch pattern on its black-gray or buff-colored rind which is created by the rippled surface of the press used to make it. Don’t eat the rind—it’s inedible— but inside you’ll discover an ivory-colored interior with several small holes that’s a real treat.'
      }]))
    .then(cheese => console.log(`${cheese.length} cheeses created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
})
