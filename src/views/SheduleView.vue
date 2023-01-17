<template>
  <div>
    <img  src="young_shedule.png" alt="shedule">
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
img{
  position: absolute;
  left: 50%;
  margin-left: -400px;
  top: 20%;
  height: 500px;
  width: 800px;
  border: 5px solid black;
  border-radius: 20px;

  @media(max-width: 802px){
    height: 300px;
    width: 600px;
    margin-left: -300px;
}
@media(max-width: 600px){
    height: 200px;
    width: 300px;
    margin-left: -150px;
}
}
</style>