<template>
    <div class="home">
        <HomePage />
    </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'

export default {
    name: 'HomeView',
    components: {
        HomePage
    },
    created(){
        let token = localStorage.getItem('token');

        if (! token)
            this.$router.push('/login')
    }
}
</script>
