<template>
  <header>
        <nav class="header">
            <div class="header-icon">
                <img src="@/assets/logo.png" class="header-icon-element"/>
            </div>

            <div class="header-box">
                <ul>
                
                    <li class="header-link"><RouterLink to="/" class="header-link-item">Home</RouterLink></li>
           

            
                    <li class="header-link"><RouterLink to="/words" class="header-link-item">Learn</RouterLink></li>
            

            
                    <li class="header-link"><RouterLink to="/exercises" class="header-link-item">Exercises</RouterLink></li>
            

            
                    <li class="header-link"><RouterLink to="/shedule" class="header-link-item">Shedule</RouterLink></li>
            
                </ul>
            </div>  
        </nav>
  </header>
</template>
  
<script setup>
  
</script>
  
<style lang="scss" scoped>
header{
    text-align: center;

    background-color: white;
}
nav{
    display: inline-block;
}
.header-box{
    float: left;
}
.header-link{
    position: relative;
    float: left;
    list-style-type: none;
    margin-right: 120px;
    top:15px;
        &-item{
            position: relative;
            text-decoration: none;
            color: black;
            font-size: 20px; 
        }

        @media(max-width: 926px){

        margin-right: 40px;
        }
        @media(max-width: 606px){
        
        margin-right: 20px;
        }
        @media(max-width: 480px){
        font-size: 5px;
        margin-right: 5px;
        }
        :hover{
            color: gray;
        }
}
.header-icon{
    float: left;
    margin-right: 500px;


    @media(max-width: 1337px){
        margin-right: 100px;
    }
    @media(max-width: 606px){
        margin-right: 50px;
}
@media(max-width: 480px){
        margin-right: 10px;
}
}
.header-icon-element{
    height: 50px;
    width: 50px;
    margin:0;
}
</style>
  