// Define actions
const GO_FORWARD = 'GO_FORWARD';
const GO_BACKWARD = 'GO_BACKWARD';

// Define action creators
function nextPage(steps) {
  return { type: GO_FORWARD, steps };
}

function prevPage(steps) {
  return { type: GO_BACKWARD, steps };
}

module.exports = {
  GO_FORWARD,
  GO_BACKWARD,
  nextPage,
  prevPage,
};
