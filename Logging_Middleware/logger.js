const stackMessages = {
  frontend: 'Frontend stack',
  backend: 'Backend stack'
};

const levelMessages = {
  debug: 'Debug message',
  info: 'Informational message',
  warn: 'Warning message',
  error: 'Error message',
  fatal: 'Fatal error message'
};

const packageMessages = {
  cache: 'Cache package',
  controller: 'Controller package',
  cron_job: 'Cron job package',
  db: 'Database package',
  domain: 'Domain package',
  handler: 'Handler package',
  repository: 'Repository package',
  route: 'Route package',
  service: 'Service package',
  api: 'API package',
  component: 'Component package',
  hook: 'Hook package',
  page: 'Page package',
  state: 'State package',
  style: 'Style package',
  auth: 'Auth package',
  config: 'Config package',
  middleware: 'Middleware package',
  utils: 'Utils package'
};

function log(stack, level, package, message) {
  if (!stackMessages[stack]) {
    throw new Error(`Invalid stack: "${stack}". Allowed stacks: ${Object.keys(stackMessages).join(', ')}.`);
  }

  if (!levelMessages[level]) {
    throw new Error(`Invalid level: "${level}". Allowed levels: ${Object.keys(levelMessages).join(', ')}.`);
  }

  if (!packageMessages[package]) {
    throw new Error(`Invalid package: "${packageName}". Allowed packages: ${Object.keys(packageMessages).join(', ')}.`);
  }

  if (typeof message !== 'string' || message.trim().length === 0) {
    throw new Error('Invalid message: must be a non-empty displayed error message.');
  }

  const entry = {
    timestamp: new Date().toISOString(),
    stack,
    stackMessage: stackMessages[stack],
    level,
    levelMessage: levelMessages[level],
    package: packageName,
    packageMessage: packageMessages[packageName],
    message: message.trim()
  };

  console.log(
    `[${entry.timestamp}] [${entry.level.toUpperCase()}] [${entry.stackMessage}] [${entry.packageMessage}] ${entry.message}`
  );

  return entry;
}

module.exports = { log };