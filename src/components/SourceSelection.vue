<template>
  <div class ="sourceselection">
    <div class="jumbotron">
    <h2><span class="fa fa-newspaper-o"></span>Daily News</h2>
    <h4> Select News Source</h4>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <select class="form-control" v-on:change="sourceChanged">
    <option v-bind:value="source.id" v-for="source of sources">{{source.name}}</option>
    </select>
    <div v-if="source">
      <h6>{{source.description}}</h6>
      <a v-bind:href="source.url" class="btn btn-lg btn-primary btn-block" target="blank">Go To {{source.name}} Website</a>
      <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
    </div><!-- /.btn-primary -->
    </div><!-- /.jumbotron -->
  </div><!-- /.sourceselection -->
</template>

<script>


    export default {
      name: 'SourceSelection',
      data () {
        return {
          sources: [],
          source: ''

  }
},
    methods: {
      sourceChanged: function (e) {
        for (var i=0; i<this.sources.length; i++) {
          if (this.sources[i].id == e.target.value) {
            this.source = this.sources[i];
  }
}
    this.$emit('sourceChanged', e.target.value);
  }
},

created () {
   this.axios.get('https://newsapi.org/v2/sources?language=en&apiKey=30fdd9c8493742eebe75a786fc36f1bd')
    .then(response => {
      this.sources = response.data.sources
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}



</script>

<style scoped>
body{
  font-family: 'Avenir','Montserrat','Lato', arial, sans-serif;
}
.jumbotron {
    padding:1em;
    zoom: 155%;
    height: 15.75em;
    border-top: .5px solid lightgoldenrodyellow;
    border-radius: .5em;
    /*background-color: #3491e4;*/
    font-family: 'Avenir','Montserrat', sans-serif;
    font-weight: bolder;
    background: #fff1e5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #1576cc, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #1576cc, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
h2{
    margin-top: -2rem;
    margin-bottom: 10px;
    text-shadow: 1px .75px 0 lightgoldenrodyellow;
    color:#072137;
    text-align: center;
    font-weight: bolder;
    font-family: 'Lato', arial, sans-serif;
    font-size: 3.75rem;
}
h4{
    text-shadow: 1px .75px 0 lightgoldenrodyellow;
    color:#072137;
    text-align: center;
    font-size: 2rem;
    margin: -1rem 0 1rem 10rem;
}
h6{
    line-height: 1.1em;
    font-weight: 500;
    color:#072137;
    font-size: 1.25rem;
    padding:  0;
    margin-top: 7px;
    margin-bottom: 4px;
}
.btn-primary{
    display:block; /* change this from inline-block */
    width:55%; /* setting the width */
    margin:0 auto; /* this will center  it */
    font-weight: 500;
    font-family: 'Avenir','Montserrat','Lato', arial, sans-serif;
    font-size:1.1em;
    color:lightgoldenrodyellow;
    border:none;
    text-align:center;
    border-radius:.5em;
    background-color:#072137;
    border:1px solid lightgoldenrodyellow;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
}
.btn-primary:hover {
  border:1px solid #072137;
  background:#1576cc;
  color: #072137;
}
.btn-primary:focus {
    text-decoration: none;
}
select.form-control {
    background-color: lightgoldenrodyellow;
    color:#2b3b50;
    font-family: 'Avenir','Montserrat','Lato', arial, sans-serif;
    font-size: 2rem;
    font-weight: 500;
    height: 4.5rem;
}
.fa-newspaper-o {
    position:relative;
    font-size: 1.5em;
    top:1.2rem;
    right: 1rem;
    font-weight: bolder;
}



/******* IPHONE 6 ********/
@media only screen and (max-width: 337px) and (min-width: 320px){

.jumbotron  {
    zoom:100%;
    height: 27rem;
}
h2{
    font-family: 'Avenir','Montserrat','Lato', arial, sans-serif;
    margin-top: -1.5rem;
    font-size: 3.2rem;
    font-weight: bolder;
}
h4{
    font-family: "Avenir";
    font-size: 2rem;
    margin: -1rem 0 1rem 6rem;
}
h6{
    font-family: "Avenir";
    font-weight:500;
    font-size: 1.45rem;
}
.fa-newspaper-o {
    font-size: 1.75em;
}
.btn-primary{
    margin-top: 1rem;
    width:auto;
    font-size: 1.5rem;
}

}
/***********   *************/

@media only screen and (max-width: 360px) and (min-width: 337px){

  .jumbotron  {
    zoom:100%;
    height: 25.5rem;
}
h2{
    font-family: 'Avenir','Montserrat','Lato', arial, sans-serif;
    margin-top: -1.5rem;
    font-size: 3.2rem;
    font-weight: bolder;
}
h4{
    font-family: "Avenir";
    font-size: 2rem;
    margin: -1rem 0 1rem 6rem;
}
h6{
    font-family: "Avenir";
    font-weight:500;
    font-size: 1.45rem;
}
.fa-newspaper-o {
    font-size: 1.75em;
}
.btn-primary{
    margin-top: 1rem;
    width:auto;
    font-size: 1.5rem;
}

}

@media (max-width: 389px) and (min-width: 361px){

.jumbotron  {
    zoom:115%;
    height: 28.25rem;
}
h2{
    font-family: "Avenir";
    margin-top: -1.5rem;
    font-size: 3.2rem;
}
h4{
    font-family: "Avenir";
    font-size: 2rem;
    margin: -1rem 0 .5rem 6rem;
}
h6{
    line-height: 1.75rem;
    font-family: "Avenir";
    font-weight:500;
    font-size: 1.45rem;
}
.btn-primary{
    margin-bottom: 1rem;
    font-weight: 700;
    font-family: "Avenir";
    width: auto;
    font-size: 1.37rem;
}
}

@media (max-width: 436px) and (min-width: 390px){

.jumbotron  {
    zoom:115%;
    height: 27rem;
}
h2{
    font-family: "Avenir";
    margin-top: -1.5rem;
    font-size: 3.2rem;
}
h4{
    font-family: "Avenir";
    font-size: 2rem;
    margin: -1rem 0 .5rem 6rem;
}
h6{
    line-height: 1.75rem;
    font-family: "Avenir";
    font-weight:500;
    font-size: 1.45rem;
}
.btn-primary{
    margin-top: 1rem;
    font-weight: 700;
    font-family: "Avenir";
    width: auto;
    font-size: 1.37rem;
}
}

@media (max-width: 469px) and (min-width: 437px){

.jumbotron  {
    zoom:115%;
    height: 26.25rem;
}
h2{
    font-family: "Avenir";
    margin-top: -1.5rem;
    font-size: 3.2rem;
}
h4{
    font-family: "Avenir";
    font-size: 2rem;
    margin: -1rem 0 .5rem 6rem;
}
h6{
    line-height: 1.75rem;
    font-family: "Avenir";
    font-weight:500;
    font-size: 1.45rem;
}
.btn-primary{
    margin-bottom: 1rem;
    font-weight: 700;
    font-family: "Avenir";
    width: auto;
    font-size: 1.37rem;
}
}
@media (max-width: 510px) and (min-width: 469px){

.jumbotron  {
    zoom:115%;
    height: 26.5rem;
}
h2{
    font-family: "Avenir";
    margin-top: -1.5rem;
    font-size: 3.2rem;
}
h4{
    font-family: "Avenir";
    font-size: 2rem;
    margin: -1rem 0 .5rem 6rem;
}
h6{
    line-height: 1.75rem;
    font-family: "Avenir";
    font-weight:500;
    font-size: 1.45rem;
}
.btn-primary{
    margin-bottom: 1.5rem;
    font-weight: 700;
    font-family: "Avenir";
    width: auto;
    font-size: 1.55rem;
}
}
@media (max-width: 717px) and (min-width: 511px){

.jumbotron  {
    zoom:115%;
    height: 25rem;
}
h2{
    font-family: "Avenir";
    margin-top: -1.5rem;
    font-size: 3.2rem;
}
h4{
    font-family: "Avenir";
    font-size: 2rem;
    margin: -1rem 0 .5rem 6rem;
}
h6{
    line-height: 1.75rem;
    font-family: "Avenir";
    font-weight:500;
    font-size: 1.4rem;
}
.btn-primary{
    margin-bottom: 1rem;
    font-weight: 700;
    font-family: "Avenir";
    width: auto;
    font-size: 1.65rem;
}
}
@media (max-width: 743px) and (min-width: 718px){

.jumbotron  {
    zoom:115%;
    height: 25rem;
}
h2{
    font-family: 'Ariel','Montserrat','Lato', arial, sans-serif;
    margin-top: -1.5rem;
    font-size: 3.2rem;
}
h4{
    font-family: "Avenir";
    font-size: 2rem;
    margin: -1rem 0rem .5rem 6rem;
}
h6{
    line-height: 1.75rem;
    font-family: "Avenir";
    font-weight:500;
    font-size: 1.45rem;
}
.btn-primary{
    font-weight: 700;
    font-family: "Avenir";
    width: auto;
    font-size: 1.6rem;
}
}
</style>
