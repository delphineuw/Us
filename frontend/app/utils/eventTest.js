const eventTest = [
    {
        key: 1,
        imageUri: {uri : 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
        title: `Let's workout ! `,
        description: 'Hey guys, I am organizing a dinner for every burger lover outhere ! So if you want to meet other expat while eating big bugers, feel free to join! ',
        date: '21/02/2021',
        time: 'Today 19:00 - 20:00',
        address: 'Parvis de Saint-Gilles 28, 1060 Saint-Gilles',
        coordinate: {longitude: 4.345936195998279, latitude: 50.83090781978249}
    },
    {
        key: 2,
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
        imageUri: {uri :'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1323&q=80'},
        title: 'Vamos a la playa ! ',
        description: 'Hey guys, I am organizing a dinner for every burger lover outhere ! So if you want to meet other expat while eating big bugers, feel free to join! ',
        date: '21/02/2021',
        time: 'Today 19:00 - 20:00',
        address: 'Parvis de Saint-Gilles 28, 1060 Saint-Gilles',
        coordinate: {longitude: 4.345936195998279, latitude: 50.83090781978249}
    },
    {
        key: 4,
        imageUri: {uri :'https://images.unsplash.com/photo-1539639885136-56332d18071d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'},
        title: 'After word drink meet up',
        description: 'Hey guys, I am organizing a dinner for every burger lover outhere ! So if you want to meet other expat while eating big bugers, feel free to join! ',
        date: '21/02/2021',
        time: 'Today 19:00 - 20:00',
        address: 'Parvis de Saint-Gilles 28, 1060 Saint-Gilles',
        coordinate: {longitude: 4.345936195998279, latitude: 50.83090781978249}
    },
    {
        key: 5,
        imageUri: {uri :'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'},
        title: 'Misma museum ',
        description: 'Hey guys, I am organizing a dinner for every burger lover outhere ! So if you want to meet other expat while eating big bugers, feel free to join! ',
        date: '21/02/2021',
        time: 'Today 19:00 - 20:00',
        address: 'Parvis de Saint-Gilles 28, 1060 Saint-Gilles',
        coordinate: {longitude: 4.345936195998279, latitude: 50.83090781978249}
    },
    {
        key: 6,
        imageUri: {uri :'https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
        title: `j'aime le vroum vroum`,
        description: 'Hey guys, I am organizing a dinner for every burger lover outhere ! So if you want to meet other expat while eating big bugers, feel free to join! ',
        date: '21/02/2021',
        time: 'Today 19:00 - 20:00',
        address: 'Parvis de Saint-Gilles 28, 1060 Saint-Gilles',
        coordinate: {longitude: 4.345936195998279, latitude: 50.83090781978249}
    },
    {
        key: 7,
        imageUri: {uri :'https://images.unsplash.com/photo-1574267432644-f410f8ec2474?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80'},
        title: 'Star wars is in theater ! ',
        description: 'Hey guys, I am organizing a dinner for every burger lover outhere ! So if you want to meet other expat while eating big bugers, feel free to join! ',
        date: '21/02/2021',
        time: 'Today 19:00 - 20:00',
        address: 'Parvis de Saint-Gilles 28, 1060 Saint-Gilles',
        coordinate: {longitude: 4.345936195998279, latitude: 50.83090781978249}
    },
    {
        key: 8,
        imageUri: {uri :'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
        title: 'C12 Tonight ',
        description: 'Hey guys, I am organizing a dinner for every burger lover outhere ! So if you want to meet other expat while eating big bugers, feel free to join! ',
        date: '21/02/2021',
        time: 'Today 19:00 - 20:00',
        address: 'Parvis de Saint-Gilles 28, 1060 Saint-Gilles',
        coordinate: {longitude: 4.345936195998279, latitude: 50.83090781978249}
    },
    {
        key: 9,
        imageUri:{uri : 'https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'},
        title: 'Wow session at my place ',
        description: 'Hey guys, I am organizing a dinner for every burger lover outhere ! So if you want to meet other expat while eating big bugers, feel free to join! ',
        date: '21/02/2021',
        time: 'Today 19:00 - 20:00',
        address: 'Parvis de Saint-Gilles 28, 1060 Saint-Gilles',
        coordinate: {longitude: 4.345936195998279, latitude: 50.83090781978249}
    },
    {
        key: 10,
        imageUri:{uri : 'https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'},
        title: `j'ai plus d'idée`,
        description: 'Hey guys, I am organizing a dinner for every burger lover outhere ! So if you want to meet other expat while eating big bugers, feel free to join! ',
        date: '21/02/2021',
        time: 'Today 19:00 - 20:00',
        address: 'Parvis de Saint-Gilles 28, 1060 Saint-Gilles',
        coordinate: {longitude: 4.345936195998279, latitude: 50.83090781978249}
    },
]

export default eventTest;