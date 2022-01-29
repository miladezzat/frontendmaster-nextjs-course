import nextConnect from 'next-connect';

import notesRoutes from './notes';

const router = nextConnect();

router.get((req, res) => {
    res.send({ apis: 'done' })
})
export default router;