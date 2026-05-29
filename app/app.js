import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/employees', (req, res) => {
    res.json({
        success: true,
        data: [
            { id: 1, name: 'Erős István'}
        ]
    })
})

export default app