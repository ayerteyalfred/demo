<template>
    <div class="main">
        <section class="header">
            <div class="header_text">
                <span class="text"> <b>Hope for</b></span>
                <span class="sub-text"><b>Humanity</b></span>
                <span>GIVE A HELPING HAND TO THOSE WHO NEED IT!</span>
                <div class="btn">
                    <button class="start-btn">Get started</button>
                    <button @click="$router.push('/')">Home</button>
                </div>
            </div>

        </section>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
.main {
    height: 100vh;
}

.header {
    background-image: url('images/kids_smiling.jpg');
    background-size: cover;
    background-color: #779692;
    background-blend-mode: overlay;
    background-position: center;
    width: 100%;
    height: 50vh;
    overflow: hidden;
}

.header_text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    margin-left: 65%;
    margin-top: 100px;
    width: 30%;
}

.header_text .text {
    color: white;
    font-size: 60px;
}

.header_text .sub-text {
    color: white;
    font-size: 57px;
}

.header_text span {
    color: white;
}

.btn {
    margin-top: 30px;
    display: flex;
    gap: 5px;
}

.btn button {
    padding: 10px;
    border-radius: 15px;
    border: none;
    transition: all 0.2s ease;
    border-radius: 30px;
    font-size: 17px;
    font-weight: bold;
    border: none;
    color: #156434;
    transition: all 0.2s ease;
}

.btn button:active {
    transform: scale(0.96);
    box-shadow: 0 0 10px black;
}

.btn .start-btn {
    border-radius: 30px;
    font-size: 17px;
    font-weight: bold;
    border: none;
    color: #156434;
    background-color: #e3603f;
}</style>