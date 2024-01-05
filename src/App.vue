<script lang="ts">
import TopBar from './components/shared/TopBar.vue'

export default {
    components: {
        TopBar,
    },
}
</script>

<template>
    <header>
        <div class="wrapper">
            <nav></nav>
        </div>
    </header>
    <v-app>
        <TopBar />

        <v-main class="bg-black-lighten-1">
            <v-container style="min-width: 95%; width:95%; max-width=95%">
                <RouterView />
            </v-container>
        </v-main>
    </v-app>
</template>
