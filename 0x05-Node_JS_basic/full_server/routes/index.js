const app = require('../server');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');
const dbPath = process.argv[2];
const router = app.Router()

console.log('dbPath');

router.get('/', (res, req) => AppController.getHomepage(res, req));
router.get('/students', (res, req) => StudentsController.getAllStudents(res, req, dbPath));
router.get('/students/:major', (res, req) => StudentsController.getAllStudentsByMajor(res, req, dbPath));