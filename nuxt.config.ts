// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        config:{
            mode: 'jit',
            theme: {
                extend: {
                    colors: {
                        primary: {
                            100: '#C2E2E933',
                            200: '#46B2C8',
                            300: '#0F808C',
                            400: '#1C697A',
                            500: '#023A59',
                        },
                        title: '#115766',
                        subTitle:"#C4C4C4"
                    },
                    fontSize: {
                        12: '12px'
                    },
                    // backgroundImage: {
                    //     'map': "url('assets/guyana-distance 1.png')",
                    // }
                }
            }
        }
    },
    app: {
        head: {
            title: "Youverify frontend-assessment",
            meta: [
                { name: "description", content: "Everything about Youverify" }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
            ]
        }
    },
})
