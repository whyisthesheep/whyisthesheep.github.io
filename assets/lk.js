window.addEventListener('keydown', (event) => {
    if (event.key === '/') {
      window.parent.postMessage({
        type: 'keyPress',
        key: '/'
      }, '*');
    }
  });