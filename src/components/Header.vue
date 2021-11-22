<template>
    <header>
        <nav class="container">
            <a href="/"><img alt="wdev" id="logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"></a>
            <img alt="Abrir menu" id="menu-button" @click="menuAtivo = !menuAtivo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg">

            <div id="menu-overlay" v-if="menuAtivo" @click="menuAtivo = !menuAtivo"></div>

            <div id="menu-items" :class="{active: menuAtivo}">
                <img alt="wdev" id="menu-logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="videos/">Vídeo</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </div>

        </nav>

        
    </header>
</template>

<script>

export default{
    name: 'Header',
    data(){
        return{
            menuAtivo: false
        }
    }
}
</script>

<style scoped>
    header{
        background-color: var(--color-background-nav);
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    header nav{
        display: flex;
        height: 60px;
        justify-content: space-between;
        align-items: center;
    }
    #logo{
        width: 130px;
        height: auto;
    }
    #menu-button{
        width:30px;
        height: auto;
        cursor: pointer;
    }
    #menu-overlay{
        position:fixed;
        top:0;
        left:0;
        width:40%;
        height: 100vh;
        background-color: var(--color-background-nav);
        opacity: 0.7;
    }
    #menu-logo{
        width: 110px;
        margin-top: 30px;
        margin-bottom: 10px;
    }
    #menu-items{
        position:fixed;
        top:0;
        right:0;
        width:60%;
        height: 100vh;
        background-color: var(--color-background-nav);
        display: none;
        flex-direction: column;
        align-items: center;
    }
    .active{
        display: flex !important;

    }
    ul{
        list-style: none;
        text-align: center;
        
    }
    ul li{
        margin: 20px 0px;
    }
    ul li a{
        color: #fff;
    }
    @media(min-width:700px){

         #menu-logo,
         #menu-button,
         #menu-overlay{
             display: none;
         }

        #menu-items{
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }
        ul{
            display: flex;
            height: 60px;
            align-items: center;
          
        }
        ul li{
            margin:0;
             margin-left: 20px;
        }
    }
</style>
