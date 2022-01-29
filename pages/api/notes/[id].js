import nc from 'next-connect';
import notes from '../../../src/data/data';

const getNote = id => notes.find(note => note.id === parseInt(id));

const handler = nc()
    .get((req, res) => {
        console.log({ id: parseInt(req.query.id) });
        const note = getNote(req.query.id);

        if (!note) {
            res.status(404);
            return res.end();
        }

        res.status(200).send({ data: note });
    })
    .patch((req, res) => {
        const note = getNote(req.query.id);

        if (!note) {
            res.status(404);
            return res.end();
        }

        const i = notes.findIndex(n => n.id === parseInt(req.query.id));
        const updated = { ...note, ...req.body };

        notes[i] = updated;

        res.status(200).send({ data: updated });
    })
    .delete((req, res) => {
        const note = getNote(req.query.id)

        if (!note) {
            res.status(404);
            return res.end();
        }
        const i = notes.findIndex(n => n.id === parseInt(req.query.id));

        notes.splice(i, 1);

        res.status(200).send({ data: req.query.id });
    })


export default handler