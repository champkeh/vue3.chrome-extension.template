const fs = require('node:fs')
const {resolve} = require('node:path')

/**
 * 移动文件
 * @param oldPath
 * @param newPath
 */
function moveFileSync(oldPath, newPath) {
    if (fs.existsSync(resolve(__dirname, '..', oldPath))) {
        fs.renameSync(
            resolve(__dirname, '..', oldPath),
            resolve(__dirname, '..', newPath)
        )
    }
}

/**
 * 删除文件或目录
 * @param path 文件或目录的路径
 */
function rmSync(path) {
    fs.rmSync(resolve(__dirname, '..', path), {recursive: true, force: true})
}

/**
 * 执行所定义的操作
 * @param ops
 */
function run(ops) {
    for (const op of ops) {
        switch (op.type) {
            case 'MoveFile':
                for (const entry of op.value) {
                    moveFileSync(entry[0], entry[1])
                }
                break
            case 'RemoveDir':
                for (const entry of op.value) {
                    rmSync(entry)
                }
                break
            default:
                throw new Error(`未定义的操作: ${op.type}`)
        }
    }
}

// build 之后需要执行的操作
const ops = [
    {
        type: 'MoveFile',
        value: [
            ['dist/src/options/options.html', 'dist/options.html'],
            ['dist/src/popup/popup.html', 'dist/popup.html'],
            ['dist/js/background.js', 'dist/background.js'],
            ['dist/js/background.js.map', 'dist/background.js.map'],
        ]
    },
    {
        type: 'RemoveDir',
        value: [
            'dist/src'
        ]
    }
]
run(ops)
