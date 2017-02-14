var app = new Vue({
  el: '.content',
  data: {
      array: [],
      min: 0,
      max: 0,
  },
  
  methods: {
    addRandomInt: function() {
        this.array.push(Math.floor((Math.random() * this.max) + this.min));
    }
  }
})
