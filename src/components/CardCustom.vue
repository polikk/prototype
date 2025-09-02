<template> 
    <Card>
        <template #title>Simple Card</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
    </Card>
</template>

<script setup>
import Card from 'primevue/card';
defineProps({
    title: String,
    content: String
})
</script>

<style scoped>
.card-custom {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
</style>