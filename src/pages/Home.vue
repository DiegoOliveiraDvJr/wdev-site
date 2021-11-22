<template>
    <main>
        <div class="text-top"> 
            Vídeos novos toda <b> quinta </b> ás <b>20h </b>
        </div>

        <a href="https://www.youtube.com/channel/UCUInlDpWqdFaYsS1D09B1mA" target="_blank"><img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg" alt="inscreva-se" id="subscribe"></a>
        <div class="text-bottom"> 
            <b>youtube.com/wdevoficial</b>
        </div>

    </main>
</template>
<script>

export default{
   name: 'Home'
}
</script>
<style scoped>
    main{
        background-color: var(--color-background-home);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .text-top{
        color: #fff;
        font-size: 22px;
        margin-bottom: 20px;
    }
    .text-bottom{
        color: #fff;
        font-size: 18px;
        margin-top: 20px;
    }
    #subscribe{
        width:340px;
    }
    @media(min-width: 700px){
        #subscribe{
            width:370px;
        }
    }
</style>