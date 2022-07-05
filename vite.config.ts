import {defineConfig} from 'vite'
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    return {
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src')
            }
        },
        build: {
            sourcemap: mode === 'test',
            rollupOptions: {
                input: {
                    popup: resolve(__dirname, '/src/popup/popup.html'),
                    options: resolve(__dirname, '/src/options/options.html'),
                    background: resolve(__dirname, '/src/background.ts'),
                },
                output: {
                    chunkFileNames: "js/[name].js",
                    entryFileNames: "js/[name].js",
                    assetFileNames: "assets/[name].[ext]",
                },
            }
        },
        plugins: [
            vue(),
        ]
    }
})
