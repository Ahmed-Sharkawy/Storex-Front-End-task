<template>
    <div class="page-single">
        <div class="container">
            <router-link to="create-movie" class="create">Create Movie</router-link>
            <div class="row m-5">
                <div class="col-md-9 col-sm-12 col-xs-12">
                    <div class="row data">
                        <div v-for="movie in movies" :key="movie.id" class="col-md-4 col-sm-12 col-xs-12">
                            <div class="blog-item-style-2">
                                <a href=""><img
                                        :src="movie.image"
                                        alt=""></a>
                                <div class="blog-it-infor">
                                    <h3><a href="#">{{ movie.name }}</a></h3>
                                    <span style="display: block;" class="time">{{ movie.created_at }}</span>
                                    <div class="test">
                                        <router-link class="update" :to="{ path: `/update-movie/${movie.id}` }">Update</router-link>
                                        <a class="delete" href="#" @click.prevent="deletee(movie.id)">Delete</a>
                                    </div>
                                    <p>{{ movie.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-12 col-xs-12">
                    <div class="sidebar">
                        <div class="sb-search sb-it">
                            <h4 class="sb-title">Search</h4>
                            <input type="text" placeholder="Enter keywords">
                        </div>
                        <div class="sb-cate sb-it">
                            <h4 class="sb-title">Categories</h4>
                            <ul v-for="category in categorys" :key="category.id">
                                <li> <a href="#">{{ category.name }}</a></li>
                            </ul>
                        </div>
                        <div class="ads">
                            <img src="@/assets/images/uploads/ads1.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Vue from 'vue';
import axios from 'axios';

export default {
    name: 'MoviePage',
    props: [
        'movies',
        'categorys',
        'allMovies',
    ],
    methods: {
        deletee(id) {
            console.log(id);
            Vue.swal({
                title: 'هل انت متاكد من الحذف',
                showCancelButton: true,
                confirmButtonText: 'Yes',
            }).then((result) => {

                if (result.isConfirmed) {
                    axios.delete(`movies/${id}`, {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token'),
                        }
                    }).then(() => {
                        this.allMovies();
                    }).catch(e => {
                        console.log(e);
                    })

                    Vue.swal({
                        title: 'تم تسجيل الخروج',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000,
                    });
                }
            });
        }
    }
}
</script>

<style scoped>
.m-5 {
    margin-top: 25px;
}

.data {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* align-items: center; */
}

.blog-item-style-2 img {
    height: 158px;
}

.test {
    display: flex;
    justify-content: space-between;
    margin: 12px auto;
}

.update {
    width: 100px;
    background-color: #00A055;
    color: #ffffff;
    padding: 9px 25px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
}

.delete {
    width: 100px;
    background-color: #dd003f;
    color: #ffffff;
    padding: 9px 25px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
}

.create {
    width: 100px;
    background-color: #00A055;
    color: #ffffff;
    padding: 9px 25px;
    margin: 20px 0;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
}
</style>
