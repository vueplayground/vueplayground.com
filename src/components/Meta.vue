<template>
</template>
<script>
    export default {
        props: ['title', 'description', 'keywords'],
        data: () => ({
            defaults: {
                title: 'Vue Play - The Ultimate Drag And Drop Designer For Vue',
                description: 'Design .vue files with Less Code using Transform Tools and Style Controllers. Drag & Drop Elements and Components into the Playground with Vue Play.',
                keywords: 'Vue Play Playground Vue.js Vuejs Drag Drop Design UI Visual Graphic User Interface',
                author: ''
            }
        }),
        created() {
            document.title = this.title ? (this.title + ' - Vue Play') : this.defaults.title
            this.ensureMeta('description')
            this.ensureMeta('keywords')
            this.ensureMeta('author')
            document.head.children.description.content = this.description || this.defaults.description
            document.head.children.keywords.content = this.keywords || this.defaults.keywords
            document.head.children.author.content = this.author || this.defaults.author
        },
        methods: {
            ensureMeta(type) {
                if (!document.head.children[type] || document.head.children[type] === undefined) {
                    let meta = document.createElement('meta')
                    meta.name = type
                    document.head.appendChild(meta)
                }
            }
        }
    }
</script>
<style scoped></style>