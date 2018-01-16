import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import bodyParser from 'body-parser';

import express from 'express';
const app = express();
app.use(bodyParser.json());

app.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

app.set('view engine', 'ejs');

import serverRender from './serverRender';
app.get(['/', '/contest/:contestId'], (req, res) => {
    serverRender(req.params.contestId)
        .then(( { initialMarkup, initialData }) => {
            res.render('index', {
                initialMarkup,
                initialData
            });
        })
        .catch(error => {
            console.error(error);
            res.status(404).send('Bad Request');
        });
});

app.use('/api', apiRouter);
app.use(express.static('public'));

app.listen(config.port, config.host, () => {
    console.info('Express listening on port ', config.port);
})