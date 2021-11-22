<template>
    <footer>
        <a class="socialLink" v-for="(socialLink, key) in socialLinks" :key="key" :href="socialLink.link"> 
            <img :alt="socialLink.label" :title="socialLink.label" :src="socialLink.icon">
        </a>
    </footer>
</template>

<script>
import api from '@/services/api.js';
export default {
    name: 'Footer',
    data(){
        return{
            socialLinks: []
        }
    },
    mounted(){
        api.get('/social-links.json').then(response => {
            this.socialLinks = response.data
        })
    }
}
</script>

<style scoped>
    footer{
        background-color: var(--color-background-nav);
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .socialLink{

        border: 1px solid #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        margin: 0 10px;
    }
    .socialLink img{
        width: 20px;
    }
</style>
