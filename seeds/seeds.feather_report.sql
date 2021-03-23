BEGIN;

INSERT INTO categories (title, company)
VALUES
    ('Knives', 1),
    ('Blenders', 1),
    ('Toasters', 1);



INSERT INTO features (title, category)
VALUES
    ('8-inch', 1), 
    ('Ergonomic Handle', 1),
    ('Carbon Stainless Steel', 1),
    ('Waved Pattern', 1),
    ('Pakkawood Handle', 1),
    ('7-inch', 1),
    ('Black', 1),
    ('5-inch', 1),
    ('Lifetime Warranty', 1),
    ('Santoprene Handle', 1),
    ('Titanium Plated', 1),
    ('Comes with Sharpener', 1),
    ('Fiery Color', 1),
    ('700 Watts', 2),
    ('Multi-Function', 2),
    ('Black', 2),
    ('48 oz', 2),
    ('Glass Jar', 2),
    ('Plastic Jar', 2),
    ('1000 Watts', 2),
    ('72 oz', 2),
    ('550 Watts', 2),
    ('Dishwasher Safe', 2),
    ('1200 Watt', 2),
    ('24 oz', 2),
    ('1450 Watts', 2),
    ('8 Blades', 2),
    ('6 Blades', 2),
    ('1800 Watt', 2),
    ('Built-In Timer', 2),
    ('Comes with Food Processor', 2),
    ('Comes with extra to-go cups', 2),
    ('2-Slice', 3),
    ('4-Slice', 3),
    ('Extra-Wide Slot', 3),
    ('Black', 3),
    ('Removable Crumb Tray', 3),
    ('Anti-Jam Shut-Off', 3),
    ('Stainless Steel', 3),
    ('Silver', 3),
    ('Long Slot', 3),
    ('Warming Rack', 3),
    ('Pull Down Crumb Tray', 3),
    ('Retro Green', 3),
    ('Red', 3);
    

INSERT INTO products (title, price, brand, category, link, description, company)
VALUES 
    ('Hamilton Beach Power Elite Blender', 29.99, 'Hamilton Beach', 2, 'https://www.amazon.com/Hamilton-Beach-Functions-Dishwasher-58148A/dp/B00EI7DPI0/ref=sr_1_3?dchild=1&keywords=blender&qid=1615066872&sr=8-3', 'All the power you need to: Mix, puree, device, crush ice, and more - with only 4 simple buttons. 700-Watt of peak blending power.', 1),
    ('MOSFiATA Titanium Plated Knife', 42.99, 'MOSFiATA', 1, 'https://www.amazon.com/MOSFiATA-Titanium-Sharpener-Stainless-EN1-4116/dp/B085ZWV5R7/ref=sr_1_21?dchild=1&keywords=Kitchen+Knife&qid=1615060712&sr=8-21', 'MOSFiATA Titanium Plated Knife is made of high-quality German stainless steel, that resists rust, corrosion, and discoloration. The razor-sharp edge is easy to maintain and makes cutting or chopping a breeze.', 1),
    ('Hamilton Beach 2 Slice Extra Wide Slot Toaster with Shade Selector', 17.99, 'Hamilton Beach', 3, 'https://www.amazon.com/Hamilton-Beach-2-Slice-Toaster-22623/dp/B00N8XFFDI/ref=sr_1_12?dchild=1&keywords=toaster&qid=1615136818&sr=8-12', 'Sleek yet practical, for a contemporary kitchen. Hamilton Beach 2 Slice Toasters are popular not only for their expert toasting performance -- they also look great in your kitchen.', 1),
    ('BUYDEEM DT-6B83 4-Slice Toaster', 59.99, 'BUYDEEM', 3, 'https://www.amazon.com/BUYDEEM-DT-6B83G-Slots%E4%B8%A8Teal-Stainless-Turquoise/dp/B07S2VVHLF/ref=sr_1_13_sspa?dchild=1&keywords=toaster&qid=1615136818&sr=8-13-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE4SVhEM0s4MEI2MEEmZW5jcnlwdGVkSWQ9QTA2NDg0ODMyVEFZV0ZEWEVXN1NPJmVuY3J5cHRlZEFkSWQ9QTAwMjkyODgyR0xSQlE3NDBXV0FZJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==', 'Fulfill and enjoy your family morning moments with 7-shade browning settings, dual Bagel/ Muffin, Defrost, Reheat and Cancel (to stop the toasting process) buttons with LED indicators.', 1),
    ('Cutluxe Santoku Knife', 36.99, 'Cutluxe', 1, 'https://www.amazon.com/dp/B07L8QTX4C?pd_rd_i=B07L8QTX4C&pd_rd_w=fhK94&pf_rd_p=51cf0d17-50cf-4c89-b1a7-606703cfac11&pd_rd_wg=3kiAB&pf_rd_r=DF1Y3FR38JV20WQXJ7M2&pd_rd_r=64dd8e5e-3b84-4b07-8607-a7cec9e287ad', 'No knife set is complete without a santoku knife, but an ordinary knife wasn’t going to cut it for Cutluxe. With a perfectionist’s eye, we’ve developed a flawlessly balanced knife that uses leading materials.', 1),
    ('Betty Crocker 2-Slice Toaster', 15.99, 'Betty Crocker', 3, 'https://www.amazon.com/Betty-Crocker-BC-2605CB-2-Slice-Toaster/dp/B00K05AZA0/ref=sr_1_11?dchild=1&keywords=toaster&qid=1615136818&sr=8-11', 'This Betty Crocker 2-slice toaster is the perfect basic kitchen accessory for a variety of breakfast items and sandwich toast.', 1),
    ('IKICH Toaster', 49.39, 'IKICH', 3, 'https://www.amazon.com/IKICH-Stainless-Toasters-Settings-Removable/dp/B07R2LXPX2/ref=sr_1_5?dchild=1&keywords=toaster&qid=1615136818&sr=8-5', 'Are You Frequently Rushing out House for Working in the Morning and not having breakfast? Are you worried that breakfast is not enough for your needs? Now IKICH 4 Slice Long Slot Toaster is great suitable for you!', 1),
    ('OMMO Blender', 119.00, 'OMMO', 2, 'https://www.amazon.com/OMMO-Professional-Countertop-Smoothie-Smoothies/dp/B08LKK4JZW/ref=sr_1_22_sspa?dchild=1&keywords=blender&qid=1615067295&sr=8-22-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExV0tGV1ZGQjhKNUQ1JmVuY3J5cHRlZElkPUEwMzA3NjMxMjVGOEVBRFNMWTA3QSZlbmNyeXB0ZWRBZElkPUEwMjc0MzkwMllEVlZTUkcwQlhKRyZ3aWRnZXROYW1lPXNwX2J0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=', 'OMMO 1800w countertop blender has the power to crush through whole fruits, vegetables, and ice in seconds. Powerful nutrient and vitamin extraction provide great tasting, nutritious beverages.', 1),
    ('Mercer Culinary Utility Knife', 22.00, 'Mercer Culinary', 1, 'https://www.amazon.com/Mercer-Culinary-Genesis-Forged-Utility/dp/B000IBSNM8/ref=sxin_10?ascsubtag=amzn1.osa.7abf8191-1ee3-4a88-b387-2b3f7648e92d.ATVPDKIKX0DER.en_US&creativeASIN=B000IBSNM8&cv_ct_cx=Kitchen+Knife&cv_ct_id=amzn1.osa.7abf8191-1ee3-4a88-b387-2b3f7648e92d.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-earns-comm&dchild=1&keywords=Kitchen+Knife&linkCode=oas&pd_rd_i=B000IBSNM8&pd_rd_r=a861f2e5-2dcb-42c5-b3ae-46b8ce89ca75&pd_rd_w=lzWa4&pd_rd_wg=UZHSK&pf_rd_p=35b32c02-1b41-4e49-9b89-0297af2446e1&pf_rd_r=RWC5Z4V132T2WMP17352&qid=1615060712&sr=1-1-64f3a41a-73ca-403a-923c-8152c45485fe&tag=scrippsonsite-20', 'The sort of knife that goes to work numerous times a day, this Genesis 5-inch utility knife is perfect for slicing sandwiches, cutting up apples, and trimming hard cheeses.', 1),
    ('Oster Precise Blend 300 Blender', 54.99, 'Oster', 2, 'https://www.amazon.com/Oster-16-Speed-Blender-Glass-006878/dp/B001ASMGNU/ref=sr_1_21?dchild=1&keywords=blender&qid=1615071148&sr=8-21', 'Perfect for smoothie making and prep work, the Precise Blend 300 is powerful and versatile to help create deliciously appetizing and flavorful meals.', 1);


INSERT INTO product_features (product, feature)
VALUES
    (1, 14),
    (1, 15),
    (1, 16),
    (1, 17),
    (1, 18),
    (1, 23),
    (2, 1),
    (2, 7),
    (2, 2),
    (2, 11),
    (2, 12),
    (3, 33),
    (3, 35),
    (3, 45),
    (4, 34),
    (4, 35),
    (4, 37),
    (4, 39),
    (4, 44),
    (5, 2),
    (5, 3),
    (5, 5),
    (5, 6),
    (5, 7),
    (6, 33),
    (6, 36),
    (6, 39),
    (6, 43),
    (7, 34),
    (7, 37),
    (7, 39),
    (7, 40),
    (7, 41),
    (7, 42),
    (8, 15),
    (8, 16),
    (8, 19),
    (8, 28),
    (8, 29),
    (8, 30),
    (8, 21),
    (9, 8),
    (9, 3),
    (9, 9),
    (9, 10),
    (10, 14),
    (10, 15),
    (10, 18),
    (10, 31);

COMMIT;
--     {
--         "company": 1,
--         "title": `Sunbeam Wide Slot 4-Slice Toaster`,
--         price: 24.99,
--         brand: `Sunbeam`,
--         category: `Toasters`,
--         link: `https://www.amazon.com/Sunbeam-4-Slice-Toaster-Black-003911-100-000/dp/B0007Y17WO/ref=sr_1_3?dchild=1&keywords=toaster&qid=1615136818&sr=8-3`,
--         description: `Get perfectly toasted food every time! The Sunbeam 4-Slice Toaster uses electronic toasting-technology for uniformly toasted bread, bagels, English muffins and more, just the way you like.`,
--         features: [34, 35, 36, 37, 38]
--     },
--     {
--         "company": 1,
--         "title": `Toaster 2 Slice`,
--         price: 28.88,
--         brand: `iFedio`,
--         category: `Toasters`,
--         link: `https://www.amazon.com/Stainless-Removable-Toasters-Settings-Function/dp/B08WZ9GT2H/ref=sr_1_2_sspa?dchild=1&keywords=toaster&qid=1615136818&sr=8-2-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE4SVhEM0s4MEI2MEEmZW5jcnlwdGVkSWQ9QTA2NDg0ODMyVEFZV0ZEWEVXN1NPJmVuY3J5cHRlZEFkSWQ9QTAyMTM3MzgxRVNKSUFIVEJNQTlFJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1`,
--         description: `The toasters 2 slice best rated prime quickly and consistently browns your bread perfectly for both sides, top to bottom. This toaster accommodates thick and thin bagels, muffins and bread. This toaster 2 slice allows you to toast different tastes you love. Automatic evenly fast toasting. Get ready your breakfast in few minutes with two slice toaster.`,
--         features: [33, 35, 37]
--     },
--     {
--         "company": 1,
--         "title": `Little Cook Santoku Knife`,
--         price: 8.59,
--         brand: `Little Cook`,
--         category: `Knives`,
--         link: `https://www.amazon.com/Little-Santoku-Kitchen-ergonomic-included/dp/B08RN5F8RN/ref=sr_1_57?dchild=1&keywords=Kitchen+Knife&qid=1615066151&sr=8-57`,
--         description: `The Little Cook 7-inch santoku knife is Made for professionals who include chefs, culinary experts, food caterers as well as an ordinary person. It is a multipurpose chef's knife that is ideal for various tasks which include cutting, chopping, dicing and slicing vegetables, fruits, fish, meat and other products.`,
--         features: [2, 3, 6, 7]
--     },
--     {
--         "company": 1,
--         "title": `BLACK+DECKER 2-Slice Extra-Wide Slot Toaster`,
--         price: 21.95,
--         brand: `BLACK+DECKER`,
--         category: `Toasters`,
--         link: `https://www.amazon.com/BLACK-DECKER-2-Slice-Extra-Wide-T2569B/dp/B002CVTT4S/ref=sr_1_3?dchild=1&keywords=toaster&qid=1615073518&sr=8-3`,
--         description: `Breakfast just got easier. The BLACK+DECKER 2-Slice Toaster is the perfect way to start your day, with six timed shade settings and special functions for bagels and frozen items. Plus, the extra-wide slots easily fit bagels, thick artisan breads, and more.`,
--         features: [33, 35, 36]
--     },
--     {
--         "company": 1,
--         "title": `Nutri Ninja Personal and Countertop Blender`,
--         price: 159.99,
--         brand: `Ninja`,
--         category: `Blenders`,
--         link: `https://www.amazon.com/Ninja-Personal-Countertop-1200-Watt-BL642/dp/B00NGV4E1G/ref=sr_1_41?dchild=1&keywords=blender&qid=1615071550&sr=8-41`,
--         description: `The Nutri Ninja | Ninja Blender Duo with Auto-iQ has 1200 watts of professional power and performance. The XL 72 oz. (64 oz. max liquid capacity) Pitcher features Total Crushing Technology to crush through ice and frozen ingredients in seconds to create creamy frozen drinks.`,
--         features: [15, 16, 19, 21, 24, 32, 30]
--     },

    
--     {
--         "company": 1,
--         "title": `High Speed Blender`,
--         price: 99.99,
--         brand: `Homgeek`,
--         category: `Blenders`,
--         link: `https://www.amazon.com/1450-Watt-Professional-Countertop-Adjustable-Multifunctional/dp/B08DNM6RKV/ref=sr_1_19?dchild=1&keywords=blender&qid=1615067295&sr=8-19&th=1`,
--         description: `This homgeek blender provides you with enough strength and precise textures, which can break more than 90% of the cell wall from the ingredients to extract nutrients and vitamins from food to the greatest extent. This is the best kitchen blender for you and an excellent gift choice.`,
--         features: [15, 16, 21, 27, 19]
--     },
--     {
--         "company": 1,
--         "title": `Oster Blender Pro`,
--         price: 62.99,
--         brand: `Oster`,
--         category: `Blenders`,
--         link: `https://www.amazon.com/Oster-Blender-24-Ounce-Smoothie-Brushed/dp/B00XHXN54K/ref=sr_1_13?dchild=1&keywords=blender&qid=1615067295&sr=8-13`,
--         description: `Blending just got better with the Oster Pro 1200 Plus. You can make everything fresh and delicious with this blender's versatility and performance.`,
--         features: [15, 18, 23, 24, 25, 28]
--     },
--     {
--         "company": 1,
--         "title": `Ninja Professional Countertop Blender`,
--         price: 89.99,
--         brand: `Ninja`,
--         category: `Blenders`,
--         link: `https://www.amazon.com/Ninja-Professional-Countertop-Technology-BL610/dp/B00NGV4506/ref=sr_1_4?dchild=1&keywords=blender&qid=1615067295&sr=8-4`,
--         description: `The Ninja professional blender 1000 features a sleek design and outstanding performance with 1000 watts of professional power. Ninja total crushing blades gives you perfect ice crushing, blending, pureeing, and controlled processing.`,
--         features: [15, 16, 19, 20, 21, 28]
--     },
    
--     {
--         "company": 1,
--         "title": `Paudin Chef Knife`,
--         price: 28.99,
--         brand: `Paudin`,
--         category: `Knives`,
--         link: `https://www.amazon.com/Chef-Knife-Stainless-Ergonomic-Restaurant/dp/B07BK4YVB3/ref=sr_1_5?dchild=1&keywords=chef+knife&qid=1615059192&sr=8-5`,
--         description: `This professional 8'' chef knife can easily handle your daily kitchen tasks of chopping, slicing, mincing and dicing of fruits, vegetables, and several meat varieties. It truly is the all-around cooking knife.`,
--         features: [1, 2, 3, 4]
--     },
--     {
--         "company": 1,
--         "title": `imarku Chef Knife`,
--         price: 39.99,
--         brand: `imarku`,
--         category: `Knives`,
--         link: `https://www.amazon.com/Imarku-Kitchen-Stainless-Ergonomic-Equipment/dp/B01DDBJF12/ref=sr_1_5?dchild=1&keywords=chef+knife&qid=1615059974&sr=8-5`,
--         description: `The Imarku 8-inch gyutou knife is designed for professionals who include chefs, culinary experts, food caterers as well as an ordinary person.`,
--         features: [1, 2, 3, 5]
--     },
--     {
--         "company": 1,
--         "title": `Toasters 2 Slice Best Rated Prime`,
--         price: 31.47,
--         brand: `Hommater`,
--         category: `Toasters`,
--         link: `https://www.amazon.com/Toaster-Stainless-Removable-Settings-Function/dp/B08S7L48NJ/ref=sr_1_9?dchild=1&keywords=toaster&qid=1615136818&sr=8-9`,
--         description: `2-slice Toaster accommodates your cravings in the morning, make your life healthier and easier.`,
--         features: [33, 35, 37, 39, 40]
--     },
--     {
--         "company": 1,
--         "title": `TUO Kitchen Utility Knife`,
--         price: 22.95,
--         brand: `TUO`,
--         category: `Knives`,
--         link: `https://www.amazon.com/TUO-Cutlery-Utility-Knife-Pakkawood/dp/B01GL50U70/ref=sxin_10?ascsubtag=amzn1.osa.7abf8191-1ee3-4a88-b387-2b3f7648e92d.ATVPDKIKX0DER.en_US&creativeASIN=B01GL50U70&cv_ct_cx=Kitchen+Knife&cv_ct_id=amzn1.osa.7abf8191-1ee3-4a88-b387-2b3f7648e92d.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-earns-comm&dchild=1&keywords=Kitchen+Knife&linkCode=oas&pd_rd_i=B01GL50U70&pd_rd_r=a861f2e5-2dcb-42c5-b3ae-46b8ce89ca75&pd_rd_w=lzWa4&pd_rd_wg=UZHSK&pf_rd_p=35b32c02-1b41-4e49-9b89-0297af2446e1&pf_rd_r=RWC5Z4V132T2WMP17352&qid=1615060712&sr=1-4-64f3a41a-73ca-403a-923c-8152c45485fe&tag=scrippsonsite-20`,
--         description: `The Fiery Phoenix Series small kitchen knives are masters of precision as they are suitable to peel an apple, supreme an orange, core a jalapeno, dice garlic or shallots, cut strawberries and some other small kitchen tasks.`,
--         features: [8, 3, 5, 2, 13]
--     },
--     {
--         "company": 1,
--         "title": `Nakiri Japanese Vegetable Knife`,
--         price: 37.89,
--         brand: `KYOKU`,
--         category: `Knives`,
--         link: `https://www.amazon.com/KYOKU-Japanese-Vegetable-Knife-Sheath/dp/B07BK53GZN/ref=sr_1_18_sspa?dchild=1&keywords=Kitchen+Knife&qid=1615060712&sr=8-18-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFCV0ZVODMwNzJKUVQmZW5jcnlwdGVkSWQ9QTA2NjMzMTkyNzcxUjlSUU5ZMDVGJmVuY3J5cHRlZEFkSWQ9QTA3NjQwNDIxMFUwMThNSFJZUEEzJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==`,
--         description: `Combines the features of a chef's knife with the versatility of a vegetable cleaver. They differ from other knives in their shape, as Nakiris are characterized by their flat profiles and squared off tips. This profile makes these knives ideal for push cutting and chopping but awkward for rock cutting.`,
--         features: [2, 3, 5, 6, 7, 9]
--     },
--     {
--         "company": 1,
--         "title": `BLACK+DECKER Countertop Blender`,
--         price: 22.44,
--         brand: `BLACK+DECKER`,
--         category: `Blenders`,
--         link: `https://www.amazon.com/BLACK-DECKER-Countertop-10-Speed-BL2010BG/dp/B00OW16ZR0/ref=sr_1_5?dchild=1&keywords=blender&qid=1615067295&sr=8-5`,
--         description: `The BLACK+DECKER 10-Speed Blender is a kitchen classic. With 10 speeds and a pulse control, operation is simple and efficient. The durable glass 6-cup jar is easy to pour from and holds several servings of your favorite soups, smoothies, frozen mixers, and more! Plus, cleanup is a breeze thanks to the dishwasher-safe removable parts.`,
--         features: [15, 16, 17, 18, 22, 23, 28]
--     },
-- ]