<template>
    <section class="p-6 pt-20 md:pt-6 pb-40">
        <Meta title="Introduction" description="A visual and innovative design tool for creating and developing Vue.js components and applications with ease.">
        </Meta>
        <article class="max-w-2xl mx-auto mb-6 mt-4 shadow border rounded-lg bg-white px-12 py-14 overflow-auto">
            <h1 class="mb-6 text-4xl">
                Welcome to Vue Play
            </h1>
            <p style="margin-top:15px" class="text-xl py-2 font-medium">
                A visual and innovative design tool for creating and developing Vue.js components and applications with ease.
            </p>
            <p style="margin-top:15px" class="text-lg">
                Drag and drop elements to the playground to build a new component template without writing a single line of code.
            </p>
            <p style="margin-top:15px" class="text-lg">
                Select the elements you want to style by clicking on the elements in the playground and use the style controls in the toolbar to update values like, width, height, colors, gradients, position etc.
            </p>
            <p style="margin-top:15px" class="text-lg">
                Vue Play does also have built in support for the well known utility-first CSS framework Tailwind CSS, with easy navigation through their thousands of premade class combinations.
            </p>
            <p style="margin-top:15px" class="text-lg">
                Use keyboard shortcuts to navigate through the elements or have an overlook in the layers view.
            </p>
            <p style="margin-top:15px" class="text-lg">
                Paste any valid HTML right into the playground, duplicate elements and have full control of your files with a code editor base on the Monaco Editor.
            </p>
            <p style="margin-top:15px" class="text-lg">
                When your are happy with your product, connect to Github and publish your site to Github Pages with just a few clicks.
            </p>
        </article>
    </section>
</template>
<script>
    import Meta from "@/components/Meta.vue";
    export default {
        components: {
            Meta
        },
        data: () => ({})
    };
</script>
<style scoped></style>