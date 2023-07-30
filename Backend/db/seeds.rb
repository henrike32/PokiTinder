# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
pokemons = [
    {
        name:'Charmander',
        species:'lizard',
        size:0.6 ,
        sound:'char',
        image:'https://freepngimg.com/convert-png/117725-charmander-free-hd-image',
        pokemon_type:'fire'
    },
    {
        name:'Flareon',
        species:'flame',
        size:0.9,
        sound:'flarr',
        image:'https://i.pinimg.com/1200x/72/f6/bb/72f6bb721495fd3f78186636497ccc5d.jpg',
        pokemon_type:'fire'

    },
    {
        name:'Snorlax',
        species:'sleeping pokemon',
        size:2.1,
        sound:'snore',
        image:'https://shorturl.at/bzGTV',
        pokemon_type:'normal'

    }
]
pokemons.each do |each_pokemon|
    Pokemon.create each_pokemon
    p "creating a pokemon #{each_pokemon}"
end