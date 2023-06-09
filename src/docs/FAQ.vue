<template>
    <section class="p-6 pt-20 md:pt-6 pb-40">
        <Meta title="Frequently Asked Questions" description="Vue Play was created to simplify web development in a visual way, inspired by several tools like Elementor, Adobe Photoshop, Adobe Flash and GameMaker.">
        </Meta>
        <article class="max-w-2xl mx-auto mb-6 mt-4 shadow border rounded-lg bg-white px-12 py-14 overflow-auto">
            <h1 class="mb-12 text-4xl">
                Frequently Asked Questions
            </h1>
            <div class="bg-slate-50 border mb-6 rounded-lg p-8">
                <p class="pb-4 text-xl font-medium">
                    Why was Vue Play created?
                </p>
                <p class="text-lg" style="margin-bottom:10px">
                    Vue Play was created to simplify web development in a visual way, inspired by several tools like
                    <a href="https://elementor.com/" target="_blank" class="hover:text-blue-700 text-blue-600">
                        Elementor,
                    </a> <a href="https://www.adobe.com/no/products/photoshop" target="_blank" class="hover:text-blue-700 text-blue-600">
                        Adobe Photoshop,
                    </a> <a href="https://www.adobe.com/no/products/flash" target="_blank" class="hover:text-blue-700 text-blue-600">
                        Adobe Flash
                    </a>
                    and
                    <a href="https://gamemaker.io" target="_blank" class="hover:text-blue-700 text-blue-600">
                        GameMaker.
                    </a>
                </p>
                <p class="text-lg" style="margin-bottom:10px">
                    The main difference is that it is built up the "Vue.js" way which opens allot of opportunities like building everything from ground up with components.
                </p>
                <p class="text-lg">
                    It also opens up possibilities to connect Vue Play with frameworks like
                    <a href="https://www.electronjs.org/" target="_blank" class="hover:text-blue-700 text-blue-600">
                        Electron
                    </a>
                    to create Native Software for Windows, Mac & Linux or
                    <a href="https://capacitorjs.com/" target="_blank" class="hover:text-blue-700 text-blue-600">
                        Capacitor
                    </a>
                    by Ionic to build IOS and Android apps in the future!
                </p>
            </div>
            <div class="bg-slate-50 border mb-6 rounded-lg p-8">
                <p class="pb-4 text-xl font-medium">
                    There is a "Components" tab in Vue Play which is empty, what is it for?
                </p>
                <p class="text-lg">
                    In the future it will house pre-made components to make development faster and more fun. We have planned to build galleries, sliders and other cool components to fill your needs. We also have plans to add community built components, but this currently needs some more work.
                </p>
            </div>
            <div class="bg-slate-50 border mb-6 rounded-lg p-8">
                <p class="pb-4 text-xl font-medium">
                    I found a premade Tailwind Component where i copied the code, how can I get it into my Vue Play application?
                </p>
                <p class="text-lg">
                    You can paste pre-made tailwind components into the playground using the Context Menu (Three Dots) or Keyboard Shortcuts [CTRL + V] or [CMD + V] on mac while you are in the playground.
                </p>
            </div>
            <div class="bg-slate-50 border mb-6 rounded-lg p-8">
                <p class="pb-4 text-xl font-medium">
                    I have a question, found a bug or have a feature request. What do I do?
                </p>
                <p class="text-lg">
                    We are working on a community page which is coming soon to handle support, feature requests and bug reports. In the meantime, feel free to post an issue on
                    <a href="https://github.com/vueplayground/vueplay.com" target="_blank">
                        GitHub.
                    </a>
                </p>
            </div>
            <div class="bg-slate-50 border mb-6 rounded-lg p-8">
                <p class="pb-4 text-xl font-medium">
                    Is "vueplay.com" built entirely with Vue Play?
                </p>
                <p class="text-lg">
                    Yes, this website "vueplay.com" is entirely built with Vue Play! (The actual software "studio.vueplay.com" is not, but is built from the ground up with coding.)
                </p>
            </div>
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