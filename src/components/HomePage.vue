<template>
    <div>
        <NavBare />
        <MovieList />
        <MoviePage :movies="movies" :categorys="categorys" :allMovies="allMovies" />
        <FooterPage />
    </div>
</template>

<script>
import axios from 'axios';
import NavBare from '@/components/include/NavBare.vue';
import FooterPage from '@/components/include/FooterPage.vue';
import MovieList from '@/components/Movie/MovieList.vue';
import MoviePage from '@/components/Movie/MoviePage.vue';

export default {
    name: 'HomePage',
    components: {
        NavBare,
        MovieList,
        MoviePage,
        FooterPage,
    },
    data() {
        return {
            movies: [],
            categorys: [],
        }
    },
    methods: {

        async allMovies() {

            await axios.get('movies', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                }
            }).then((r) => {
                this.movies = r.data.message;
            }).catch((e) => {
                if (e.response.status == 401) {
                    localStorage.removeItem('token')
                    this.$router.push('/login')
                }
            });
        },

        async allCategorys() {

            await axios.get('category', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                }
            }).then((r) => {
                this.categorys = r.data.message;
            }).catch((e) => {
                if (e.response.status == 401) {
                    localStorage.removeItem('token')
                    this.$router.push('/login')
                }
            });
        }
    },
    created() {
        this.allMovies();
        this.allCategorys();
    },
}
</script>