<script >

</script>

<template>
<div>
  <header>
<a href="/">calc</a>
<a href="/todo">todo</a>
<a href="/weather">weather</a>
<a href="/tweet">comments</a>
<a href="/home">home</a>


  </header>
<router-view/>
</div>
</template>

<style>
body {
  background-color: rgb(9 16 53);
  margin: 0;
}
header{
    min-height: 70px;
    background-color: #767ea596;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
}
a{
  text-decoration: none;
  color: white;
  padding: 0 10px;
}
</style>
