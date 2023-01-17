<template>
    <footer class="footer">
        <p>Support contact: kacperlesniewski2000@gmail.com</p>
    </footer>
</template>

<script setup>

</script>

<style scoped lang="scss">

footer{
    position: fixed;
    background-color: rgb(40, 29, 136);
    height: 40px;
    text-align: center;
    font-weight: 200;
    bottom: 0px;
    width: 100%;
    @media(max-width: 420px)
    {
        font-size: 10px;
    }
}

p{
    margin-top: 10px;
    color: white;
    @media(max-width: 420px)
    {
        margin-top: 15px;
    }
}
</style>
