import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';
import * as CadController from '../controllers/cadastroController';

const router = Router();

router.get('/', HomeController.home);
router.get("/cadastro/:id/age-remove", CadController.cad_user_remove )
router.get('/cadastro/:id/age-add', CadController.cad_user_add)
router.get('/cadastro/:id/delete', CadController.cad_delete)
router.post('/cadastro', CadController.cad_user)

router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);

router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade-resultado', UserController.idadeAction);

export default router;