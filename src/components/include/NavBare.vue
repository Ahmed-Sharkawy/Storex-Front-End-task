<template>
    <div>
        <header class="ht-header full-width-hd sticky">
            <div class="row">
                <nav id="mainNav" class="navbar navbar-default navbar-custom">
                    <div class="navbar-header logo">
                        <div class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <div id="nav-icon1">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <a href="index-2.html"><img class="logo" src="@/assets/images/logo1.png" alt="" width="119"
                                height="58"></a>
                    </div>
                    <div class="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav flex-child-menu menu-left"></ul>
                        <ul class="nav navbar-nav flex-child-menu menu-right">
                            <li class="btn signupLink"><a href="#" @click.prevent="logout">LOGOUT</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name: "NavBare",
    methods: {
        logout() {
            Vue.swal({
                title: 'هل انت متاكد من تسجيل الخروج',
                showCancelButton: true,
                confirmButtonText: 'Yes',
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem('token');
                    Vue.swal({
                        title: 'تم تسجيل الخروج',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000,
                    });
                }
            });
        }
    },
}
</script>