<template>
    <div class="hero common-hero">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="hero-ct">
                        <h1> Movie list - grid</h1>
                        <ul class="breadcumb">
                            <li class="active"><router-link to="/"><a @click.prevent="" href="#">Home</a></router-link></li>
                            <li> <span class="ion-ios-arrow-right"></span> Movie list </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieList',
}
</script>
