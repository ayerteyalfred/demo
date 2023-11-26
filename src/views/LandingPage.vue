<template>
        <div class="main">
                <section class="container">
                        <div class="text">
                                <img class="logo" src="/images/logo.png" alt="logo">
                                <h1>WE CAN <br> SAVE <br>  THE FUTURE</h1>
                                <button>Donate</button>
                        </div>
                </section>
        </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
* {
        box-sizing: border-box; 
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        /* margin: 0; */
        /* padding: ; */
}
.main{
        height: 100vh;
        overflow: hidden;
}

.container {
        display: flex ;
        flex-direction: row;
        /* justify-content: center; */
        align-items: center;

        background-size: cover;
        background-color: rgba(231, 233, 228, 0.44);
        background-blend-mode: overlay;
        background-image: url("/images/children.jpg");
        background-position: 100% 90%;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        object-fit: contain;
      
}

.text {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        border-radius: 15px;
        background-color:  #677e5d;
        margin-left: 200px;
        width: 500px;
        height: 600px;
}

.text .logo {
        width: 250px;
        height: 250px;
}

.text h1{
        text-align: center;
        color: white;
        font-weight: bold;
        font-size: 25px;
}

.text button{
        width: 30%;
        height: 50px;
        padding: 8px 22px;

        border-radius: 10px;
        font-size: 18px;
        font-weight: bold;
        border: none;
        color: #156434;
        background-color: #e3603f;
        transition: all 0.2s ease;
        /* background: linear-gradient(var(--x), #00ccff, #0e1538, #d400d4); */
}

.text button:active {
        transform: scale(0.96);
        box-shadow: 0 0 10px black;
}


</style>