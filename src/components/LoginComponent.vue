<template>
    <div class="container">
        <img src="/images/smile.jpg" alt="pic">
        <div class="details">
            <div class="icon">
                <img @click="closeModal()" class="icon_n" src="/images/left_arrow.png" alt="icon">
            </div>
            <h1>Create an account</h1>
            <form class="form">
                <input type="text" placeholder="Username">
                <input type="password" placeholder="Password">
                <h3 class="sub-text">Forgot password ?</h3>
                <button class="btn">Log in</button>
            </form>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['closeModal'])




</script>

<style lang="css" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;

}

.container img {
    width: 40%;
    height: 80%;
    border-radius: 10px 0 0 10px;
}

.details {
    background-color: #677e5d;
    align-items: center;
    border-radius: 0 10px 10px 0;
    width: 30%;
    height: 80%;
}

.details img {
    width: 30px;
    height: 40px;
    margin-top: 5px;
    margin-bottom: 70px;
}

.icon {}

.details h1 {
    margin-left: 50px;
}

.form {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
}

.form input {
    width: 350px;
    height: 50px;
    border-radius: 10px;
    padding-left: 15px;
    margin-top: 20px;
    border: none;
}

.form input:active {
    transform: scale(0.96);
    box-shadow: 0 0 10px black;
}

.btn {
    width: 150px;
    height: 50px;
    border-radius: 15px;
    font-size: 17px;
    margin-left: 30%;
    margin-top: 10px;
    font-weight: bold;
    border: none;
    transition: all 0.2s ease;
}

.btn:active {
    transform: scale(0.96);
    box-shadow: 0 0 10px black;
}
</style>