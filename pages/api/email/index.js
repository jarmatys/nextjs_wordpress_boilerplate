import { sendEmail } from 'services/email';
import Joi from 'joi';

const schema = Joi.object({
    subject: Joi.string().empty(''),
    name: Joi.string().empty(''),
    email: Joi.string().email().required(),
    message: Joi.string().required(),
    terms: Joi.equal("on").required()
});


export default async (req, res) => {
    switch (req.method) {
        case 'POST': {
            try {
                const payload = req.body;
                const validPayload = await schema.validateAsync(payload);
                const result = await sendEmail(validPayload.message);

                res.status(200).json({ status: 'created', result });
            } catch (error) {
                res.status(422).json({ status: 'not_sent', error });
            }
            break;
        }
        default:
            res.status(400);
    }
};
