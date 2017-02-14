Vue.component('navbar', {
    template: `
              <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
     </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>


`  
})


//origami piecc
Vue.component('origami-piece', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['origami'],
  template: '<div class="container"><h1> {{ origami.name }} </h1> <br> <img :src="origami.link" alt="" ></div>'

})





var app = new Vue({
  el: '.app',
  data: {
      givenName: "",
      givenLink: "",
      origami: [
        {name: 'Inside Reverse Fold', link: 'http://www.origami-resource-center.com/images/101InsideReverse2.jpg'},
        {name: 'Outside Reverse Fold', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Orisymbol_outside_reverse_fold.svg/500px-Orisymbol_outside_reverse_fold.svg.png'}        
      ],
  },
  
  methods: {

    //addPiece: function() {
        //var temp = {name: this.givenName, link: this.givenLink}
        //this.origami.push(temp)

    //}
  }
})
