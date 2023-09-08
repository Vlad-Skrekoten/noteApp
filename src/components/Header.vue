<template>
    <header class="header">
        <div class="header_container">
            <div class="logo">Notes</div>
            <div class="add" @click="toggleAdd()">
                <img src="../../public/images/plus.svg" alt="">
            </div>
            <transition name="fade">
                <ul class="type_color" v-if="showColors">
                    <li @click="addCard()" class="add_color red"></li>
                    <li @click="addCard()" class="add_color blue"></li>
                    <li @click="addCard()" class="add_color pink"></li>
                    <li @click="addCard()" class="add_color green"></li>
                    <li @click="addCard()" class="add_color yellow"></li>
                </ul>
            </transition>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            showColors: false
        };
    },

    methods: {
        toggleAdd() {
            this.showColors = !this.showColors;
        }
    }

};
</script>