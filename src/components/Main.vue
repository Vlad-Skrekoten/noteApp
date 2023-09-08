<template>
    <div class="search">
        <input type="text" class="input-search" placeholder="Search">
    </div>


    <ul v-bind:class="content === true ? 'content_transform' : 'content'">
        <transition name="fade">
            <li @click="transformCard()" v-bind :class="transform === true ? 'card_big' : 'card'"><input type="text"></li>
        </transition>
        <li class="card"><input type="text"></li>
        <li class="card"><input type="text"></li>
        <li class="card"><input type="text"></li>
        <li class="card"><input type="text"></li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            add: false,
            transform: false,
            content: false,
        };
    },
    methods: {
        transformCard() {
            this.transform = !this.transform;
            this.content = !this.content;
        },

        addCard() {
            this.add = !this.add;
        }
    }
};

</script>


<style lang="scss">
.search {
    color: black;
}
</style>