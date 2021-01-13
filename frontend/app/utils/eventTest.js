const eventTest = [
    {
        key: 1,
        category: 'Sport',
        imageUri: {uri : 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
        title: `Let's workout ! `,
        description: 'Freeletics is a new way to train, when and where you want it, without material. No constraint, no excuse! The exercises are selected from an app which is already gathering more than 40 million users worldwide. Track your progress and watch explanatory videos to execute very diverse exercises correctly! ',
        date: '10/02/2021',
        time: '10:00 - 21:00',
        address: 'Rue du Bourdon 100, 1180 Bruxelles',
        coordinate: {longitude: 4.3325027560946365, latitude: 50.78558617252944}, 
    },
    {
        key: 2,
        category: 'Restaurant',
        imageUri: {uri :'https://images.unsplash.com/photo-1540420828642-fca2c5c18abe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80'},
        title: 'Burgers for everyone ! ',
        description: 'Hey guys, I am organizing a dinner for every burger lover outhere ! So if you want to meet other expat while eating big bugers, feel free to join! ',
        date: '21/02/2021',
        time: 'Today 19:00 - 20:00',
        address: 'Parvis de Saint-Gilles 28, 1060 Saint-Gilles',
        coordinate: {longitude: 4.345936195998279, latitude: 50.83090781978249}
    },
    {
        key: 3,
        category: 'Travel',
        imageUri: {uri :'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1323&q=80'},
        title: 'Brussels by Water ! ',
        description: `This week will be Playa Resorts for Families. Join us along with your children for a fun night of Family Travel to the Caribbean. Michelle with Playa Resorts will take us on a tour of 11 resorts that are family friendly. After registering for this FREE event, you will receive a confirmation email containing information about joining the webinar. Join us from the comforts of your own home to experience where a family can go when it is safe again! `,
        date: '01/03/2021',
        time: '09:00 - 20:00',
        address: 'Quai des Péniches 2BIS, 1000 Bruxelles',
        coordinate: {longitude: 4.347127413767099, latitude: 50.859398143056644}
    },
    {
        key: 4,
        category: 'Bar',
        imageUri: {uri :'https://images.unsplash.com/photo-1539639885136-56332d18071d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'},
        title: 'After word drink meet up at Café Belga',
        description: 'Hello workers, For this special occasion we’re inviting some of the best residents from the golden era of Belgian clubbing. To top things off Mr. Plastic Dreams, Robin “Jaydee” Albers makes his long anticipated return and we welcome the legendary Jam El Mar (Jam & Spoon) as our international guests. ',
        date: '30/04/2021',
        time: 'Today 16:00 - 22:00',
        address: 'Place Eugène Flagey 18, 1050 Ixelles',
        coordinate: {longitude: 4.3726480133370265, latitude: 50.82728711868825}
    },
    {
        key: 5,
        category: 'Art',
        imageUri: {uri :'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'},
        title: 'Mima museum',
        description: `Hey guys, Let's go and visit the brand-new Millennium Iconoclast Museum of Art in Brussels, which is finally opening its doors`,
        date: '04/02/2021',
        time: '19:00 - 20:00',
        address: 'Quai du Hainaut 41, 1080 Molenbeek-Saint-Jean',
        coordinate: {longitude: 4.338306742602237, latitude: 50.85116390879209}
    },
    {
        key: 6,
        category: 'Car',
        imageUri: {uri :'https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
        title: `Auto show (Salon automobile)`,
        description: 'I am organizing a group for the car lover to go to the auto show.',
        date: '15/03/2021',
        time: '10:00 - 15:00',
        address: 'Place de Belgique 1, 1020 Bruxelles',
        coordinate: {longitude: 4.338468669591468, latitude: 50.89849661242241}
    },
    {
        key: 7,
        category: 'Cinema',
        imageUri: {uri :'https://images.unsplash.com/photo-1574267432644-f410f8ec2474?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80'},
        title: 'Star wars is in theater ! ',
        description: `For all the Star Wars fans, let's go see the last movie`,
        date: '21/02/2021',
        time: 'Today 19:00 - 20:00',
        address: 'Place De Brouckère 38, 1000 Bruxelles',
        coordinate: {longitude: 4.352585552857148, latitude: 50.8524742759449}
    },
    {
        key: 8,
        category: 'Party',
        imageUri: {uri :'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
        title: 'C12 x Queer Future Club',
        description: 'C12 is inviting Queer Future Club & Full Scale for an open on the Place d’Espagne organized in collaboration with PikNik Ethik Télévie. All the income will go Televie 2020 and to the artists. See you there for a sunny Sunday afternoon dance session with Fais Le Beau, Sixsixsixties, Azo Kal & Adema.',
        date: '29/02/2021',
        time: '22:00 - 06:00',
        address: 'Rue du Marché Aux Herbes 116, 1000 Bruxelles',
        coordinate: {longitude: 4.35552143890757, latitude: 50.84640173491676}
    },
    {
        key: 9,
        category: 'Game',
        imageUri:{uri : 'https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'},
        title: 'Wow session at my place ',
        description: 'Hey guys, video game night',
        date: '30/02/2021',
        time: '18:00 - 20:00',
        address: 'Rue du Congrès 42, 1000 Bruxelles',
        coordinate: {longitude: 4.367244199212342, latitude: 50.84947796969864}
    },
    {
        key: 10,
        category: 'Game',
        imageUri:{uri : 'https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'},
        title: `Oldstar Games`,
        description: 'Hey guys, I am organizing a game for every geeks outhere ! So if you want to meet other expat while eating big bugers, feel free to join! ',
        date: '21/02/2021',
        time: '09:00 - 12:00',
        address: 'Boulevard Anspach 177, 1000 Bruxelles',
        coordinate: {longitude: 4.346649587907325, latitude: 50.84590317775835}
    },
]

export default eventTest;