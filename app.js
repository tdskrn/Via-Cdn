const app = Vue.createApp({
  // data, functions, variables
  //   template: '<h2> I am Template </h2>',
  data () {
    return {
      url: 'http://www.google.com',
      showBooks: true,
      name: 'Harry Potter',
      bilheteria: 1500,
      x: 0,
      y: 0,
      books: [
        { name: 'DAORA ', bilheteria: 250, isFavorite: false },
        { name: 'DAORA demais ', bilheteria: 50, isFavorite: true },
        { name: 'DAORA pa caramba ', bilheteria: 550, isFavorite: false },
        { name: 'DAORA pa cacete ', bilheteria: 450, isFavorite: true }
      ]
    }
  },
  methods: {
    change () {
      if (this.name === 'Harry Potter') {
        this.name = 'jacks'
      } else {
        this.name = 'Harry Potter'
      }
    },

    changeView () {
      this.showBooks = !this.showBooks
    },
    handleEvents (event) {
      console.log(event)
    },
    handleMouseMove (e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  },
  computed: {
    filteredBooks () {
      return this.books.filter(book => book.isFavorite)
    }
  }
})

app.mount('#app')
