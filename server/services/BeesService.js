let veryRealDB = {
    Bees: [
        {
            name: "Duke of Venice",
            color: 'teal',
            busy: true,
            aptitude: 10,
            favoriteFood: "Honey",
            lost: false,
        },
    
        {
            name: "Brabantio",
            color: 'teal',
            busy: false,
            aptitude: 7,
            favoriteFood: "Honey",
            lost: false,
        },
        {
            name: "Gratiano",
            color: 'teal',
            busy: true,
            aptitude: 3,
            favoriteFood: "Honey",
            lost: false,
        },
    
        {
            name: "Lodovico",
            color: 'teal',
            busy: false,
            aptitude: 2,
            favoriteFood: "Honey",
            lost: false,
        },
    
        {
            name: "Othello",
            color: 'blueviolet',
            busy: true,
            aptitude: 9,
            favoriteFood: "Honey",
            lost: false,
        },
    
        {
            name: "Cassio",
            color: 'blueviolet',
            busy: true,
            aptitude: 5,
            favoriteFood: "Honey",
            lost: false,
        },
    
        {
            name: "Iago",
            color: 'blueviolet',
            busy: false,
            aptitude: 6,
            favoriteFood: "Honey",
            lost: false,
        },
    
        {
            name: "Roderigo",
            color: 'blueviolet',
            busy: true,
            aptitude: 4,
            favoriteFood: "Honey",
            lost: false,
        },
    
        {
            name: "Montano",
            color: 'goldenrod',
            busy: true,
            aptitude: 3,
            favoriteFood: "Honey",
            lost: false,
        },
    
        {
            name: "Clown",
            color: 'goldenrod',
            busy: true,
            aptitude: 1,
            favoriteFood: "Honey",
            lost: false,
        },
    
        {
            name: "Desdemona",
            color: 'goldenrod',
            busy: false,
            aptitude: 4,
            favoriteFood: "Honey",
            lost: false,
        },
    
        {
            name: "Emilia",
            color: 'goldenrod',
            busy: true,
            aptitude: 10,
            favoriteFood: "Honey",
            lost: false,
        },
    
        {
            name: "Bianca",
            color: 'grey',
            busy: true,
            aptitude: 8,
            favoriteFood: "Honey",
            lost: false,
        },
    
        {
            name: "Senator",
            color: 'grey',
            busy: false,
            aptitude: 7,
            favoriteFood: "Honey",
            lost: false,
        },
    
        {
            name: "Sailor",
            color: 'grey',
            busy: false,
            aptitude: 9,
            favoriteFood: "Honey",
            lost: false,
        },
    
        {
            name: "Gentleman of Cyprus",
            color: 'grey',
            busy: true,
            aptitude: 5,
            favoriteFood: "Honey",
            lost: false,
        },

    ]

}


class BeesService {
    //    async patchBee(name, body) {
    //        let found = veryRealDB.Bees.find(b => b.name = name)
    //        console.log(body);
    //     }
    async updateBee(beeData) {
        let foundIndex = veryRealDB.Bees.findIndex(b => b.name == beeData.name)
        let replaced = veryRealDB.Bees.splice(foundIndex, 1, beeData)
        return replaced
    }
    async deleteBee(name) {
        veryRealDB.Bees = veryRealDB.Bees.filter(b => b.name != name)
        return 'bee is gone'
    }
    createBee(beeData) {
        veryRealDB.Bees.push(beeData)
        return beeData
    }
    async getBees() {
        return veryRealDB.Bees
    }

}



export const beesService = new BeesService()