<template>
    <section class="p-6 pt-20 md:pt-6 pb-40">
        <Meta title="Deployment">
        </Meta>
        <article class="max-w-2xl mx-auto mb-6 mt-4 shadow border rounded-lg bg-white px-12 py-14 overflow-auto">
            <h1 class="mb-6 text-4xl">
                Launch your site Anywhere
            </h1>
            <p style="margin-top:15px" class="text-xl py-2 font-medium">
                Vue Play can build a production-ready distribution folder off your application or publish directly to GitHub Pages using GitHub Actions.
            </p>
            <p style="margin-top:15px" class="text-lg">
                As your project can be connected to GitHub it is easy to create publish pipelines by connecting to third-party services like
                <a class="hover:text-blue-700 text-blue-600" href="https://www.netlify.com/" target="_blank">
                    Netlify
                </a>
                or
                <a target="_blank" href="https://www.heroku.com/" class="hover:text-blue-700 text-blue-600">
                    Heroku
                </a>
                through
                <a target="_blank" href="https://github.com/" class="hover:text-blue-700 text-blue-600">
                    GitHub.
                </a>
            </p>
            <p style="margin-top:15px" class="text-lg">
                This way you can easily create different staging and development environments with full control over your deployment pipeline.
            </p>
            <p style="margin-top:15px" class="text-lg">
                As Vue Play also provides export of a production-ready distribution folder, you can use your host and upload files to your server using FTP.
            </p>
            <p style="margin-top:15px" class="text-lg">
                This way you are not bound to any hosting provider and are free to host your site anywhere as you like.
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