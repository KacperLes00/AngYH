<template>
  <div class="container">
    <h1>News</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore dolores animi. Non ipsam, ducimus magnam consequatur suscipit labore deserunt quam totam sequi quas ad! Praesentium facilis cumque quasi fugiat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore dolores animi. Non ipsam, ducimus magnam consequatur suscipit labore deserunt quam totam sequi quas ad! Praesentium facilis cumque quasi fugiat.
      </p>
  </div>
</template>

<script setup>


</script>

<style scoped lang="scss">
h1{
  padding: 50px;
  text-align: center;
  @media(max-width: 816px){
    padding: 10px;
    }
}
.container{
  position: absolute;
  background-color: white;
  border-radius: 20px;
  width: 800px;
  height: 500px;
  left:50%;
  margin-left: -400px;
  top: 200px;
  border:3px solid black;

  @media(max-width: 816px){
    width: 600px;
    height: 500px;
    left:50%;
    margin-left: -300px;
    }
    @media(max-width: 615px){
    width: 400px;
    height: 500px;
    left:50%;
    margin-left: -200px;
    font-size: 15px;
    }
}
p{
  padding: 50px;
  text-align: center;
  @media(max-width: 816px){
    padding: 10px;
    }
}
</style>