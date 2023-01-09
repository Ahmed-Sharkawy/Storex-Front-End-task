<template>
    <div>
        <NavBare />
        <MovieList />

        <div class="page-single">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 col-sm-12 col-xs-12">
                        <div class="blog-detail-ct">
                            <div class="comment-form">
                                <h4>Leave a comment</h4>
                                <form id="createMovie" @submit.prevent="create">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <input type="text" name="name" placeholder="Your name">
                                        </div>
                                        <div class="col-md-4">
                                            <div class="select-wrapper">
                                                <select name="category_id" class="select">
                                                    <option v-for="category in categorys" :key="category.id" :value="category.id">{{ category.name }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="field-row m25">
                                                <div class="styled-file-select">
                                                    <input class="no-bg no-border" type="text" disabled
                                                        placeholder="Choose file (gif, jpg, png, pdf)" />
                                                    <span class="ion-ios-plus-empty"></span>
                                                    <input type="file" name="image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <textarea name="description" placeholder="Description"></textarea>
                                        </div>
                                    </div>
                                    <input class="submit" type="submit" placeholder="submit">
                                </form>
                            </div>
                            <!-- comment form -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterPage />
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import NavBare from '@/components/include/NavBare.vue';
import FooterPage from '@/components/include/FooterPage.vue';
import MovieList from '@/components/Movie/MovieList.vue';

export default {
    name: 'MovieCreate',
    components: {
        NavBare,
        MovieList,
        FooterPage,
    },
    data() {
        return {
            categorys: [],
        }
    }
    ,
    methods: {
        create() {
            let createMovie = document.getElementById('createMovie');
            let form = new FormData(createMovie);

            axios.post(`movies`, form, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                }
            }).then( () => {
                Vue.swal({
                    title: 'تم الاضافة بنجاح',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000,
                });
                this.$router.push('/')
            }).catch(e => {
                if (e.response.status == 401) {
                    localStorage.removeItem('token')
                    this.$router.push('/login')
                }
            })
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
        this.allCategorys();
    }
}
</script>

<style scoped>
.styled-file-select {
    box-sizing: border-box;
    position: relative;
}

.styled-file-select input[type="file"] {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    color: #ECF0F1;
    opacity: 0;
}

.styled-file-select input[type="text"] {
    box-sizing: border-box;
    padding-right: 30px;
    height: 42px;
    width: 100%;
    display: block;
    border: 1px solid #d9d9d9;
    outline: none;
    text-indent: 10px;
    background-color: #f3f3f3;
    padding: 0;
}

.styled-file-select span {
    display: block;
    position: absolute;
    right: 0;
    top: 6px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    z-index: 0;
    font-size: 24px;
}

.field-row input[type="text"].no-border {
    border: none;
}

.select {
    height: 42px;
    background: #020D18;
    border: 1px solid #405266;
    color: white;
}
</style>