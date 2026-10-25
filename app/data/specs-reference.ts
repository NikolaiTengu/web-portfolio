export type SpecTab = 'ARCHITECTURE' | 'REST_API' | 'AUTH' | 'SCHEMA';

export const specsReference = {
  ARCHITECTURE: {
    eyebrow: 'REFERENCE PATTERNS // SERVICE MAP',
    intro: 'A reference flow based on the service, API, database, and queue technologies used across the portfolio projects.',
    nodes: ['Client', 'Express API', 'Services', 'MongoDB', 'RabbitMQ'],
    flow: ['Client sends a request', 'Express validates and routes it', 'Services apply application rules', 'MongoDB persists state', 'RabbitMQ carries asynchronous work'],
    code: ['services:', '  api:', '    build: ./api', '    ports: ["3000:3000"]', '  worker:', '    build: ./worker', '    depends_on: [rabbitmq]', '  rabbitmq:', '    image: rabbitmq:3-management'],
  },
  REST_API: {
    eyebrow: 'REFERENCE PATTERNS // ROUTES',
    intro: 'A small Express route surface for resource-oriented project APIs.',
    routes: [['GET', '/api/projects'], ['POST', '/api/projects'], ['GET', '/api/projects/:id'], ['PATCH', '/api/projects/:id']],
    code: ["router.get('/projects/:id', async (req, res, next) => {", '  try {', '    const project = await Project.findById(req.params.id);', '    if (!project) return res.status(404).json({ error: "Not found" });', '    return res.json(project);', '  } catch (error) { next(error); }', '});'],
  },
  AUTH: {
    eyebrow: 'REFERENCE PATTERNS // TOKEN POLICY',
    intro: 'Reference JWT middleware and an OAuth hand-off for protected application actions.',
    policy: ['Short-lived access tokens', 'Refresh tokens stored securely', 'Role checks at the route boundary'],
    steps: ['Redirect to provider', 'Validate callback state', 'Create or locate the user', 'Issue a protected session'],
    code: ['export function requireAuth(req, res, next) {', '  const token = req.headers.authorization?.replace("Bearer ", "");', '  if (!token) return res.status(401).json({ error: "Unauthorized" });', '  req.user = verifyToken(token);', '  return next();', '}'],
  },
  SCHEMA: {
    eyebrow: 'REFERENCE PATTERNS // MONGOOSE',
    intro: 'Reference models shaped around bounded documents and explicit ownership.',
    models: ['User: identity, roles, createdAt', 'Project: title, description, skills, image', 'Order: user, items, total, status'],
    code: ['const projectSchema = new Schema({', '  title: { type: String, required: true },', '  description: { type: String, required: true },', '  skills: { type: [String], default: [] },', '}, { timestamps: true });'],
  },
} as const;
