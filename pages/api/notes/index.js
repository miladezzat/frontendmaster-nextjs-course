import nc from 'next-connect';
import notes from '../../../src/data/data';

const handler = nc()
    .post((req, res) => {
        const note = {
            ...req.body,
            id: Date.now(),
        }
        notes.push(note);

        return res.status(201).send({ data: note });
    })
    .get((req, res) => {
        return res.status(200).send({ data: notes });
    })

export default handler;
