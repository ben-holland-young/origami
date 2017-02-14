Vue.component('origami-piece', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['origami'],
  template: '<div class="container"><h1> {{ origami.name }} </h1> <br> <img :src="origami.link" alt="" ></div>'
})
var app = new Vue({
  el: '.content',
  data: {
      origami: [
        {name: 'Inside Reverse Fold', link: 'http://www.origami-resource-center.com/images/101InsideReverse2.jpg'},
        {name: 'Outside Reverse Fold', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Orisymbol_outside_reverse_fold.svg/500px-Orisymbol_outside_reverse_fold.svg.png'}        
      ],
  },
  
  methods: {
  }
})
