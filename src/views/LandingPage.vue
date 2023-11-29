<template>
        <div class="main">
                <div class="modal" v-if="showModal">
                        <!-- <img class="icon" src="/images/left_arrow.png" alt=""> -->
                        <!-- <button>Click me !</button> -->
                        <LoginComponent />
                </div>
                <section class="container">

                        <div class="text">
                                <img class="logo" src="/images/logo.png" alt="logo">
                                <h1> TOGETHER <br> WE CAN <br> SAVE <br> THE FUTURE</h1>
                                <div class="btn">
                                        <button @click="showModal = true" class="donation-btn">Donate</button>
                                        <button @click="$router.push('/about')" class="info-btn">Read more..</button>
                                </div>
                        </div>
                </section>
        </div>
</template>

<script setup>
import LoginComponent from '../components/LoginComponent.vue';
import { ref } from 'vue'

const showModal = ref(false)



</script>

<style lang="css" scoped>
* {
        box-sizing: border-box;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        /* margin: 0; */
        /* padding: ; */
}

.modal {
        /* border: 3px solid red; */
        /* position: relative; */
}

.main {
        /* position: relative; */
        height: 100vh;
        overflow: hidden;
}

.icon {
        /* position: relative; */
        background-color: #156434;
        top: 500px;
        width: 30px;
        height: 40px;
        margin-bottom: 90px;
        margin-right: 90%;
}

.container {
        display: flex;
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
        /* gap: 0px; */
        align-items: center;
        border-radius: 15px;
        background-color: #677e5d;
        margin-left: 200px;
        width: 500px;
        height: 600px;
}

.text .logo {
        width: 250px;
        height: 250px;
}

.text h1 {
        text-align: center;
        color: white;
        font-weight: bold;
        font-size: 29px;
        margin-bottom: 45px;

}

.btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 25px;
        padding: 30px;
}

.text .donation-btn {
        width: 150px;
        height: 50px;
        /* padding: 8px 22px; */

        border-radius: 30px;
        font-size: 17px;
        font-weight: bold;
        border: none;
        color: #156434;
        background-color: #e3603f;
        transition: all 0.2s ease;
}

.text .info-btn {
        width: 150px;
        height: 50px;
        /* padding: 8px 22px; */
        border-radius: 30px;
        font-size: 17px;
        font-weight: bold;
        border: none;
        color: #156434;
        background-color: #e3603f;
        transition: all 0.2s ease;
}

.text button:active {
        transform: scale(0.96);
        box-shadow: 0 0 10px black;
}
</style>